
import { Box, Button, Divider, Flex, HStack, SimpleGrid, VStack } from '@chakra-ui/react';

import { Input } from '../../components/Form/Input';
import { Heading } from '../../components/Heading';
import { IResearchSection } from '../../interfaces/IResearchSection';

interface CreateResearchSectionProps {
  idx: number;
  section: IResearchSection;
  handleOnChange: (value: string | number, target: string, secId?: number, queId?: number, optId?: number) => void;
  addQuestion: (secId?: number) => void;
}

export const CreateResearchSection = ({ idx, section, handleOnChange, addQuestion }: CreateResearchSectionProps) => {

  return (
    <Box
      borderRadius={8}
      backgroundColor="gray.800"
      padding={["6", "8"]}
      mb={["6", "8"]}
    >
      <Heading title={`Sessão ${idx + 1}`} />

      <Divider marginY="6" borderColor="gray.700"></Divider>

      <VStack spacing="8">
        <SimpleGrid minChildWidth="240px" spacing={["6", "8"]} width="100%">
          <Input
            name="name"
            label="Nome da sessão"
            value={section.name}
            onChange={(event) => handleOnChange(event.target.value, 'name', idx)}
          />
        </SimpleGrid>

        <SimpleGrid minChildWidth="240px" spacing={["6", "8"]} width="100%">
          <Input
            name="description"
            label="Descrição"
            value={section.description}
            onChange={(event) => handleOnChange(event.target.value, 'description', idx)}
          />
        </SimpleGrid>
      </VStack>


      <Flex marginTop="8" justify="flex-end">
        <HStack spacing="4">
          <Button colorScheme="pink" type="button" onClick={() => addQuestion(idx)}>Adicionar Pergunta</Button>
        </HStack>
      </Flex>
    </Box>
  );
}
