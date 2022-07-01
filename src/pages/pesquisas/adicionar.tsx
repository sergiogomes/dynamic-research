
import Link from 'next/link';
import { Box, Button, Divider, Flex, HStack, SimpleGrid, VStack } from '@chakra-ui/react';

import { Input } from '../../components/Form/Input';
import { Header } from '../../components/Header';
import { Heading } from '../../components/Heading';
import { Sidebar } from '../../components/Sidebar';
import { useAddResearch } from '../../services/hooks/useAddResearch';

const CreateResearch = () => {
  const { register, handleSubmit, formState, handleCreateResearch } = useAddResearch();

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
              <Input
                name="version"
                label="Versão"
                error={formState.errors.version}
                {...register('version')}
              />
            </SimpleGrid>

            <SimpleGrid minChildWidth="240px" spacing={["6", "8"]} width="100%">
              <Input
                name="introMessage"
                label="Texto de introdução"
                error={formState.errors.introMessage}
                {...register('introMessage')}
              />
            </SimpleGrid>
            
            <SimpleGrid minChildWidth="240px" spacing={["6", "8"]} width="100%">
              <Input
                name="thanksMessage"
                label="Texto de agradecimento"
                error={formState.errors.thanksMessage}
                {...register('thanksMessage')}
              />
            </SimpleGrid>
          </VStack>


          <Flex marginTop="8" justify="flex-end">
            <HStack spacing="4">
              <Button colorScheme="pink" type="submit">Adicionar Sessão</Button>
            </HStack>
          </Flex>

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

export default CreateResearch;
