import { useState } from 'react';
import { useRouter } from 'next/router';
import { FieldValues, FormState, SubmitHandler, useForm, UseFormHandleSubmit, UseFormRegister } from 'react-hook-form';
import { useMutation } from 'react-query';
import * as yup from 'yup';
import _ from 'lodash';

import { yupResolver } from '@hookform/resolvers/yup';

import { api } from '../../services/api';
import { queryClient } from '../../services/queryClient';
import { IResearch } from '../../interfaces/IResearch';
import { IResearchSection } from '../../interfaces/IResearchSection';
import { IResearchQuestion } from '../../interfaces/IResearchQuestion';
import { IResearchResponseOption } from '../../interfaces/IResearchResponseOption';

const initialResearchState: IResearch = {
  id: '',
  status: true,
  name: '5 Linguagens do Amor',
  version: '',
  introMessage: '',
  thanksMessage: '',
  captureLead: true,
  oneSectionPerPage: true,
  sections: [],
  createdAt: '',
  updatedAt: '',
}

const initialSectionState: IResearchSection = {
  name: '',
  description: '',
  oneQuestionPerPage: false,
  questions: [],
}

const initialQuestionState: IResearchQuestion = {
  question: '',
  explanation: '',
  responseType: 14,
  responseLabel: '',
  responsePlaceholder: '',
  enableDontKnowOption: false,
  dontKnowLabel: '',
  enableJustification: false,
  justificationLabel: '',
  justificationPlaceholder: '',
  required: false,
  requiredLabel: '',
  enableOtherOption: false,
  otherLabel: '',
  otherPlaceholder: '',
  minLength: 0,
  maxLength: 0,
  mask: '',
  responseOptions: [],
}

const initialResponseOptionState: IResearchResponseOption = {
  name: '',
  explanation: '',
  weight: 0,
}

export const useAddResearch = (): useAddResearchReturn => {
  const router = useRouter();
  const [research, setResearch] = useState<IResearch>(initialResearchState);

  const createResearchFormSchema = yup.object().shape({
    name: yup.string().required('Nome é obrigatório').min(3),
  });

  const createResearch = useMutation(async (research: IResearch) => {
    const response = await api.post('pesquisas', {
      research: {
        ...research,
        created_at: new Date(),
      }
    });

    return response.data.research;
  }, {
    onSuccess: () => {
      queryClient.invalidateQueries('pesquisas');
    }
  });

  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(createResearchFormSchema)
  });

  const handleOnChange = (
    value: string | number,
    target: string,
    secId?: number,
    queId?: number,
    optId?: number
  ) => {
    const researchClone = _.cloneDeep(research);

    if (optId || optId === 0) {
      researchClone.sections[secId].questions[queId].responseOptions[
        optId
      ][target] = value;
    } else if (queId || queId === 0) {
      researchClone.sections[secId].questions[queId][target] = value;
    } else if (secId || secId === 0) {
      researchClone.sections[secId][target] = value;
    } else {
      researchClone[target] = value;
    }

    setResearch(researchClone);
  };

  const handleCreateResearch: SubmitHandler<IResearch> = async (data) => {
    // await createResearch.mutateAsync(data);
    console.log(' ----- handleCreateResearch ----- ', research)
    router.push('/pesquisas');
  }

  const addSection = () => {
    const researchClone = _.cloneDeep(research);
    researchClone.sections.push(initialSectionState);

    setResearch(researchClone);
  };

  const addQuestion = (secId: number) => {
    const researchClone = _.cloneDeep(research);
    researchClone
      .sections[secId]
      .questions
      .push(initialQuestionState);

    setResearch(researchClone);
  };

  const addResponseOption = (secId: number, queId: number) => {
    const researchClone = _.cloneDeep(research);
    researchClone
      .sections[secId]
      .questions[queId]
      .responseOptions
      .push(initialResponseOptionState);

    setResearch(researchClone);
  };

  return {
    research, formState, register, handleSubmit, handleOnChange, handleCreateResearch, addSection, addQuestion, addResponseOption
  }
}

interface useAddResearchReturn {
  research: IResearch;
  formState: FormState<FieldValues>;
  register: UseFormRegister<FieldValues>;
  handleSubmit: UseFormHandleSubmit<FieldValues>;
  handleOnChange: (value: string | number | boolean, target: string, secId?: number, queId?: number, optId?: number) => void;
  handleCreateResearch: SubmitHandler<IResearch>;
  addSection: () => void;
  addQuestion: (secId?: number) => void;
  addResponseOption: (secId?: number, queId?: number) => void;
}
