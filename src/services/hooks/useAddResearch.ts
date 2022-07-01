import { useRouter } from 'next/router';
import { FieldValues, FormState, SubmitHandler, useForm, UseFormHandleSubmit, UseFormRegister } from 'react-hook-form';
import { useMutation } from 'react-query';
import * as yup from 'yup';

import { yupResolver } from '@hookform/resolvers/yup';

import { api } from '../../services/api';
import { queryClient } from '../../services/queryClient';
import { IResearch } from '../../interfaces/IResearch';

export const useAddResearch = (): useAddResearchReturn => {
  const router = useRouter();

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

  const handleCreateResearch: SubmitHandler<IResearch> = async (data) => {
    // await createResearch.mutateAsync(data);
    router.push('/pesquisas');
  }

  return {
    register, handleSubmit, formState, handleCreateResearch
  }
}

interface useAddResearchReturn {
  register: UseFormRegister<FieldValues>;
  handleSubmit: UseFormHandleSubmit<FieldValues>;
  formState: FormState<FieldValues>;
  handleCreateResearch: SubmitHandler<IResearch>;
}
