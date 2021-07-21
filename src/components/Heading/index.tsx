import { Heading as ChakraHeading, Spinner } from '@chakra-ui/react';

interface HeadingProps {
  title: string;
  isFetching?: boolean;
}

export function Heading({ title, isFetching = false }: HeadingProps) {
  return (
    <ChakraHeading size="lg" fontWeight="normal">
      {title}

      {isFetching && 
        <Spinner 
          size="sm" 
          color="gray.500"
          ml="4"
        />
      }
    </ChakraHeading>
  );
}