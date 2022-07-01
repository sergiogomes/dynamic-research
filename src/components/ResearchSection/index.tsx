
import Link from 'next/link';
import { Box, Button, Divider, Flex, HStack, SimpleGrid, VStack } from '@chakra-ui/react';

import { Input } from '../../components/Form/Input';
import { Heading } from '../../components/Heading';
import { useAddResearch } from '../../services/hooks/useAddResearch';
import { IResearchSection } from '../../interfaces/IResearchSection';

interface CreateResearchSectionProps {
  id: number;
  section: IResearchSection
}

const CreateResearchSection = ({ id, section }: CreateResearchSectionProps) => {
  const { formState, register, handleSubmit, handleResearchOnChange, handleCreateResearch, addSection } = useAddResearch();

  return (
    <Box
      as="form"
      borderRadius={8}
      backgroundColor="gray.800"
      padding={["6", "8"]}
      mb={["6", "8"]}
      onSubmit={handleSubmit(handleCreateResearch)}
    >
      <Heading title={`Sessão ${id}`} />

      <Divider marginY="6" borderColor="gray.700"></Divider>

      <VStack spacing="8">
        <SimpleGrid minChildWidth="240px" spacing={["6", "8"]} width="100%">
          <Input
            name="name"
            label="Nome da sessão"
            value={section.name}
            error={formState.errors.name}
            {...register('name')}
            onChange={(event) => handleResearchOnChange(event, 'name')}
          />
        </SimpleGrid>

        <SimpleGrid minChildWidth="240px" spacing={["6", "8"]} width="100%">
          <Input
            name="description"
            label="Descrição"
            value={section.description}
            error={formState.errors.description}
            {...register('description')}
            onChange={(event) => handleResearchOnChange(event, 'description')}
          />
        </SimpleGrid>
      </VStack>


      <Flex marginTop="8" justify="flex-end">
        <HStack spacing="4">
          <Button colorScheme="pink" type="button" onClick={addSection}>Adicionar Pergunta</Button>
        </HStack>
      </Flex>
    </Box>
  );
}

export default CreateResearchSection;
