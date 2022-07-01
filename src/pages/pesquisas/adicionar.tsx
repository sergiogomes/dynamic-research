
import Link from 'next/link';
import { Box, Button, Divider, Flex, HStack, SimpleGrid, VStack } from '@chakra-ui/react';

import { Input } from '../../components/Form/Input';
import { Header } from '../../components/Header';
import { Heading } from '../../components/Heading';
import { Sidebar } from '../../components/Sidebar';
import { useAddResearch } from '../../services/hooks/useAddResearch';
import CreateResearchSection from '../../components/ResearchSection';

const CreateResearch = () => {
  const { research, formState, register, handleSubmit, handleResearchOnChange, handleCreateResearch, addSection } = useAddResearch();

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

        <Box flex="1">
          <Box
            as="form"
            borderRadius={8}
            backgroundColor="gray.800"
            padding={["6", "8"]}
            mb={["6", "8"]}
            onSubmit={handleSubmit(handleCreateResearch)}
          >
            <Heading title="Criar Pesquisa" />

            <Divider marginY="6" borderColor="gray.700"></Divider>

            <VStack spacing="8">
              <SimpleGrid minChildWidth="240px" spacing={["6", "8"]} width="100%">
                <Input
                  name="name"
                  label="Nome da pesquisa"
                  value={research.name}
                  error={formState.errors.name}
                  {...register('name')}
                  onChange={(event) => handleResearchOnChange(event, 'name')}
                />
                <Input
                  name="version"
                  label="Versão"
                  value={research.version}
                  error={formState.errors.version}
                  {...register('version')}
                  onChange={(event) => handleResearchOnChange(event, 'version')}
                />
              </SimpleGrid>

              <SimpleGrid minChildWidth="240px" spacing={["6", "8"]} width="100%">
                <Input
                  name="introMessage"
                  label="Texto de introdução"
                  value={research.introMessage}
                  error={formState.errors.introMessage}
                  {...register('introMessage')}
                  onChange={(event) => handleResearchOnChange(event, 'introMessage')}
                />
              </SimpleGrid>
              
              <SimpleGrid minChildWidth="240px" spacing={["6", "8"]} width="100%">
                <Input
                  name="thanksMessage"
                  label="Texto de agradecimento"
                  value={research.thanksMessage}
                  error={formState.errors.thanksMessage}
                  {...register('thanksMessage')}
                  onChange={(event) => handleResearchOnChange(event, 'thanksMessage')}
                />
              </SimpleGrid>
            </VStack>


            <Flex marginTop="8" justify="flex-end">
              <HStack spacing="4">
                <Button colorScheme="pink" type="button" onClick={addSection}>Adicionar Sessão</Button>
              </HStack>
            </Flex>
          </Box>

          {!!research.sections && research.sections.length > 0 && (
            research.sections.map((section, idx) => (
              <CreateResearchSection key={idx} section={section} id={idx+1} />
            ))
          )}

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
