
import { Box, Divider, SimpleGrid, VStack } from '@chakra-ui/react';

import { Input } from '../../components/Form/Input';
import { Heading } from '../../components/Heading';
import { IResearchResponseOption } from '../../interfaces/IResearchResponseOption';

interface CreateResearchResponseOptionProps {
  optId: number;
  queId: number;
  secId: number;
  option: IResearchResponseOption;
  handleOnChange: (value: string | number | boolean, target: string, secId?: number, queId?: number, optId?: number) => void;
}

export const CreateResearchResponseOption = ({ optId, queId, secId, option, handleOnChange }: CreateResearchResponseOptionProps) => {

  return (
    <Box
      borderRadius={8}
      backgroundColor="gray.800"
      padding={["6", "8"]}
      mb={["6", "8"]}
    >
      <Heading title={`Opção ${optId + 1}`} />

      <Divider marginY="6" borderColor="gray.700"></Divider>

      <VStack spacing="8">
        <SimpleGrid minChildWidth="240px" spacing={["6", "8"]} width="100%">
          <Input
            name="option"
            label="Opção"
            value={option.name}
            onChange={(event) => handleOnChange(event.target.value, 'name', secId, queId, optId)}
          />
        </SimpleGrid>

        {/* <SimpleGrid minChildWidth="240px" spacing={["6", "8"]} width="100%">
          <Input
            name="explanation"
            label="Explicação"
            value={option.explanation}
            onChange={(event) => handleOnChange(event.target.value, 'explanation', secId, queId, optId)}
          />
        </SimpleGrid> */}
      </VStack>
    </Box>
  );
}
