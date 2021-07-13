import { Box, Button, Checkbox, Flex, Icon, Table, Tbody, Td, Text, Th, Thead, Tr, useBreakpointValue } from '@chakra-ui/react';
import Link from 'next/link';
import { useEffect } from 'react';
import { RiAddLine, RiPencilLine } from 'react-icons/ri';
import { useQuery } from 'react-query';
import { Heading } from '../../components/Heading';
import { Pagination } from '../../components/Pagination';
import { Sidebar } from '../../components/Sidebar';


export default function User() {
  const query = useQuery();

  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  useEffect(() => {
    fetch('http://localhost:3000/api/users')
      .then(response => response.json())
      .then(data => console.log(data));
  }, []);

  return (
    <Box>Josimar Junior

      <Flex
        width="100%"
        marginY="6"
        maxWidth={1480}
        marginX="auto"
        paddingX="6"
      >
        <Sidebar />

        <Box
          flex="1"
          borderRadius={8}
          backgroundColor="gray.800"
          padding="8"
        >
          <Flex
            marginBottom="8"
            justifyContent="space-between"
            alignItems="center"
          >
            <Heading title="Usuários" />

            <Link href="/users/create" passHref>
              <Button
                as="a"
                size="sm"
                fontSize="sm"
                colorScheme="pink"
                leftIcon={<Icon as={RiAddLine} fontSize="20" />}
              >
                Criar novo
              </Button>
            </Link>
          </Flex>

          <Table colorScheme="whiteAlpha">
            <Thead>
              <Tr>
                <Th paddingX={["4", "4", "6"]} color="gray.300" width="8">
                  <Checkbox colorScheme="pink" />
                </Th>
                <Th>Usuário</Th>
                {isWideVersion && <Th>Data de cadastro</Th>}
                <Th width="8"></Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td paddingX={["4", "4", "6"]}>
                  <Checkbox colorScheme="pink" />
                </Td>
                <Td>
                  <Box>
                    <Text fontWeight="bold">Josimar Junior</Text>
                    <Text fontSize="sm" color="gray.300">
                      josimarjr479@gmail.com
                    </Text>
                  </Box>
                </Td>
                {isWideVersion && <Td> 04 de Abril, 2021 </Td>}
                <Td>
                  <Button
                    as="a"
                    size="sm"
                    fontSize="sm"
                    colorScheme="purple"
                    leftIcon={<Icon as={RiPencilLine} fontSize="16" />}
                  >
                    Editar
                  </Button>
                </Td>
              </Tr>
              <Tr>
                <Td paddingX={["4", "4", "6"]}>
                  <Checkbox colorScheme="pink" />
                </Td>
                <Td>
                  <Box>
                    <Text fontWeight="bold">Josimar Junior</Text>
                    <Text fontSize="sm" color="gray.300">
                      josimarjr479@gmail.com
                    </Text>
                  </Box>
                </Td>
                {isWideVersion && <Td> 04 de Abril, 2021 </Td>}
                <Td>
                  <Button
                    as="a"
                    size="sm"
                    fontSize="sm"
                    colorScheme="purple"
                    leftIcon={<Icon as={RiPencilLine} fontSize="16" />}
                  >
                    Editar
                  </Button>
                </Td>
              </Tr>
              <Tr>
                <Td paddingX={["4", "4", "6"]}>
                  <Checkbox colorScheme="pink" />
                </Td>
                <Td>
                  <Box>
                    <Text fontWeight="bold">Josimar Junior</Text>
                    <Text fontSize="sm" color="gray.300">
                      josimarjr479@gmail.com
                    </Text>
                  </Box>
                </Td>
                {isWideVersion && <Td> 04 de Abril, 2021 </Td>}
                <Td>
                  <Button
                    as="a"
                    size="sm"
                    fontSize="sm"
                    colorScheme="purple"
                    leftIcon={<Icon as={RiPencilLine} fontSize="16" />}
                  >
                    Editar
                  </Button>
                </Td>
              </Tr>
            </Tbody>
          </Table>

          <Pagination />
        </Box>
      </Flex>
    </Box>
  );
}