import { SubmitHandler, useForm } from 'react-hook-form';
import { useMutation } from 'react-query';
import { useRouter } from 'next/router';
import Link from 'next/link';
import * as yup from 'yup';

import { Box, Button, Divider, Flex, HStack, SimpleGrid, VStack } from '@chakra-ui/react';
import { yupResolver } from '@hookform/resolvers/yup';

import { Input } from '../../components/Form/Input';
import { Header } from '../../components/Header';
import { Heading } from '../../components/Heading';
import { Sidebar } from '../../components/Sidebar';
import { api } from '../../services/api';
import { queryClient } from '../../services/queryClient';
import { IResearch } from '../../interfaces/IResearch';

const createResearchFormSchema = yup.object().shape({
  name: yup.string().required('Nome é obrigatório').min(3),
});

export default function CreateResearch() {
  const router = useRouter();

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
    await createResearch.mutateAsync(data);
    router.push('/pesquisas');
  }

  return (
    <Box>
      <Header />

      <Flex
        width="100%"
        marginY="6"
        maxWidth={1480}
        marginX="auto"
        paddingX="6"
      >
        <Sidebar />

        <Box
          as="form"
          flex="1"
          borderRadius={8}
          backgroundColor="gray.800"
          padding={["6", "8"]}
          onSubmit={handleSubmit(handleCreateResearch)}
        >
          <Heading title="Criar Pesquisa" />

          <Divider marginY="6" borderColor="gray.700"></Divider>

          <VStack spacing="8">
            <SimpleGrid minChildWidth="240px" spacing={["6", "8"]} width="100%">
              <Input
                name="name"
                label="Nome da pesquisa"
                error={formState.errors.name}
                {...register('name')}
              />
            </SimpleGrid>
          </VStack>

          <Flex marginTop="8" justify="flex-end">
            <HStack spacing="4">
              <Link href="/pesquisas" passHref>
                <Button colorScheme="whiteAlpha">Cancelar</Button>
              </Link>
              <Button colorScheme="pink" type="submit" isLoading={formState.isSubmitting}>Salvar</Button>
            </HStack>
          </Flex>
        </Box>
      </Flex>
    </Box >
  );
}
