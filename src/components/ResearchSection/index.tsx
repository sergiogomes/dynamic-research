
import { Box, Button, Divider, Flex, HStack, SimpleGrid, VStack } from '@chakra-ui/react';

import { Input } from '../../components/Form/Input';
import { Switch } from '../../components/Form/Switch';
import { Heading } from '../../components/Heading';
import { CreateResearchQuestion } from '../ResearchQuestion';
import { IResearchSection } from '../../interfaces/IResearchSection';

interface CreateResearchSectionProps {
  secId: number;
  section: IResearchSection;
  handleOnChange: (value: string | number | boolean, target: string, secId?: number, queId?: number, optId?: number) => void;
  addQuestion: (secId?: number) => void;
  addResponseOption: (secId?: number, queId?: number) => void;
}

export const CreateResearchSection = ({ secId, section, handleOnChange, addQuestion, addResponseOption }: CreateResearchSectionProps) => {

  return (
    <Box
      borderRadius={8}
      backgroundColor="gray.800"
      padding={["6", "8"]}
      mb={["6", "8"]}
    >
      <Heading title={`Sessão ${secId + 1}`} />

      <Divider marginY="6" borderColor="gray.700"></Divider>

      <VStack spacing="8">
        <SimpleGrid minChildWidth="240px" spacing={["6", "8"]} width="100%">
          <Input
            name="name"
            label="Nome da sessão"
            value={section.name}
            onChange={(event) => handleOnChange(event.target.value, 'name', secId)}
          />
        </SimpleGrid>

        <SimpleGrid minChildWidth="240px" spacing={["6", "8"]} width="100%">
          <Input
            name="description"
            label="Descrição"
            value={section.description}
            onChange={(event) => handleOnChange(event.target.value, 'description', secId)}
          />
        </SimpleGrid>

        {/* <SimpleGrid minChildWidth="240px" spacing={["6", "8"]} width="100%">
          <Switch
            name="oneQuestionPerPage"
            label="Exibe uma sessão por página"
            colorScheme='pink'
            isChecked={section.oneQuestionPerPage}
            onChange={(event) => handleOnChange(event.target.checked, 'oneQuestionPerPage', secId)}
          />
        </SimpleGrid> */}
      </VStack>

      {!!section.questions && section.questions.length > 0 && (
        section.questions.map((question, idx) => (
          <CreateResearchQuestion
            key={idx}
            queId={idx}
            secId={secId}
            question={question}
            handleOnChange={handleOnChange}
            addResponseOption={addResponseOption}
          />
        ))
      )}

      <Flex marginTop="8" justify="flex-end">
        <HStack spacing="4">
          <Button colorScheme="pink" type="button" onClick={() => addQuestion(secId)}>Adicionar Pergunta</Button>
        </HStack>
      </Flex>
    </Box>
  );
}
