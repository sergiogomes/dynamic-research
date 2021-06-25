import { Heading as ChakraHeading } from '@chakra-ui/react';

interface HeadingProps {
  title: string;
}

export function Heading({ title }: HeadingProps) {
  return (
    <ChakraHeading size="lg" fontWeight="normal">{title}</ChakraHeading>
  );
}