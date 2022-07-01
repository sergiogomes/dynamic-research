import { ChangeEventHandler, useState } from 'react';
import { useRouter } from 'next/router';
import { FieldValues, FormState, SubmitHandler, useForm, UseFormHandleSubmit, UseFormRegister } from 'react-hook-form';
import { useMutation } from 'react-query';
import * as yup from 'yup';

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

  const handleResearchOnChange = (event: React.ChangeEvent<HTMLInputElement>, key: string) => {
    setResearch(prevState => ({
      ...prevState,
      [key]: event.target.value,
    }))
  }

  const handleCreateResearch: SubmitHandler<IResearch> = async (data) => {
    // await createResearch.mutateAsync(data);
    console.log(' ----- handleCreateResearch ----- ', research)
    router.push('/pesquisas');
  }

  const addSection = () => {
    const sections = research.sections;
    sections.push(initialSectionState);

    setResearch(prevState => ({
      ...prevState,
      sections,
    }))
  };

  return {
    research, formState, register, handleSubmit, handleResearchOnChange, handleCreateResearch, addSection,
  }
}

interface useAddResearchReturn {
  research: IResearch;
  formState: FormState<FieldValues>;
  register: UseFormRegister<FieldValues>;
  handleSubmit: UseFormHandleSubmit<FieldValues>;
  handleResearchOnChange: (event: React.ChangeEvent<HTMLInputElement>, key: string) => void;
  handleCreateResearch: SubmitHandler<IResearch>;
  addSection: () => void;
}
