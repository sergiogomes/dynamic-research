import { HStack, Box, Button } from "@chakra-ui/react";

export function Pagination() {
  return (
    <HStack
      marginTop="8"
      spacing="6"
      justifyContent="space-between"
      alignItems="center"
    >
      <Box>
        <strong>0</strong> - <strong>10</strong> de <strong>100</strong>
      </Box>
      <HStack spacing="2">
        <Button
          size="sm"
          fontWeight="xs"
          width="4"
          colorScheme="pink"
          disabled
          _disabled={{
            backgroundColor: 'pink.500',
            cursor: 'default',
          }}
        >
          1
        </Button>
        <Button
          size="sm"
          fontWeight="xs"
          width="4"
          backgroundColor="gray.700"
          _hover={{
            backgroundColor: 'gray.500'
          }}
        >
          2
        </Button>
        <Button
          size="sm"
          fontWeight="xs"
          width="4"
          backgroundColor="gray.700"
          _hover={{
            backgroundColor: 'gray.500'
          }}
        >
          3
        </Button>
        <Button
          size="sm"
          fontWeight="xs"
          width="4"
          backgroundColor="gray.700"
          _hover={{
            backgroundColor: 'gray.500'
          }}
        >
          4
        </Button>
      </HStack>
    </HStack>
  );
}