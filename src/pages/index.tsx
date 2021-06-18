import { Flex, Input, Button, Stack, FormLabel, FormControl } from '@chakra-ui/react';
export default function Home() {
  return (
    <Flex
      width="100vw"
      height="100vh"
      alignItems="center"
      justifyContent="center"
    >
      <Flex
        as="form"
        width="100%"
        maxWidth={360}
        backgroundColor="gray.800"
        padding="8"
        borderRadius={8}
        flexDirection="column"
      >
        <Stack
          spacing="4"
        >
          <FormControl>
            <FormLabel
              htmlFor="email"
            >
              E-mail
            </FormLabel>

            <Input
              id="email"
              name="email"
              type="email"
              backgroundColor="gray.900"
              focusBorderColor="pink.500"
              variant="filled"
              _hover={{
                backgroundColor: 'gray.900'
              }}
              size="lg"
            />
          </FormControl>
          <FormControl>
            <FormLabel
              htmlFor="password"
            >
              Senha
            </FormLabel>

            <Input
              id="password"
              name="password"
              type="password"
              backgroundColor="gray.900"
              focusBorderColor="pink.500"
              variant="filled"
              _hover={{
                backgroundColor: 'gray.900'
              }}
              size="lg"
            />
          </FormControl>
        </Stack>

        <Button
          type="submit"
          marginTop="6"
          colorScheme="pink"
          size="lg"
        >
          Entrar
        </Button>
      </Flex>
    </Flex>
  )
}
