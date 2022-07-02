
import { Box, Button, Divider, Flex, HStack, SimpleGrid, VStack } from '@chakra-ui/react';

import { Input } from '../../components/Form/Input';
import { Heading } from '../../components/Heading';
import { IResearchQuestion } from '../../interfaces/IResearchQuestion';

interface CreateResearchQuestionProps {
  queId: number;
  secId: number;
  question: IResearchQuestion;
  handleOnChange: (value: string | number, target: string, secId?: number, queId?: number, optId?: number) => void;
  addResponseOption: (secId?: number, queId?: number) => void;
}

export const CreateResearchQuestion = ({ queId, secId, question, handleOnChange, addResponseOption }: CreateResearchQuestionProps) => {

  return (
    <Box
      borderRadius={8}
      backgroundColor="gray.800"
      padding={["6", "8"]}
      mb={["6", "8"]}
    >
      <Heading title={`Pergunta ${queId + 1}`} />

      <Divider marginY="6" borderColor="gray.700"></Divider>

      <VStack spacing="8">
        <SimpleGrid minChildWidth="240px" spacing={["6", "8"]} width="100%">
          <Input
            name="question"
            label="Pergunta"
            value={question.question}
            onChange={(event) => handleOnChange(event.target.value, 'question', secId, queId)}
          />
        </SimpleGrid>

        <SimpleGrid minChildWidth="240px" spacing={["6", "8"]} width="100%">
          <Input
            name="explanation"
            label="Explicação"
            value={question.explanation}
            onChange={(event) => handleOnChange(event.target.value, 'explanation', secId, queId)}
          />
        </SimpleGrid>
      </VStack>


      <Flex marginTop="8" justify="flex-end">
        <HStack spacing="4">
          <Button colorScheme="pink" type="button" onClick={() => addResponseOption(queId)}>Adicionar Opção de Resposta</Button>
        </HStack>
      </Flex>
    </Box>
  );
}
