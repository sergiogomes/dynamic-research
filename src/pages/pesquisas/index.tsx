import NextLink from 'next/link';
import { Box, Button, Checkbox, Flex, Icon, Link, Spinner, Table, Tbody, Td, Text, Th, Thead, Tr, useBreakpointValue } from '@chakra-ui/react';
import { useState } from 'react';
import { RiAddLine, RiPencilLine } from 'react-icons/ri';

import { Header } from '../../components/Header';
import { Heading } from '../../components/Heading';
import { Pagination } from '../../components/Pagination';
import { Sidebar } from '../../components/Sidebar';
import { useResearches } from '../../services/hooks/useResearch';
import { IResearch } from '../../interfaces/IResearch';

interface ResearchProps {
  researches: IResearch[]
}

export default function ResearchPage({ researches }: ResearchProps) {
  const [page, setPage] = useState(1);
  const { data, isLoading, isFetching, error } = useResearches(page, {
    initialData: researches,
  });
  console.log(data);
  

  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  return (
    <Flex flexDirection="column" height="100vh">
      <Header />

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
            <Heading title="Pesquisas" isFetching={!isLoading && isFetching} />

            <NextLink href="/pesquisas/adicionar" passHref>
              <Button
                as="a"
                size="sm"
                fontSize="sm"
                colorScheme="pink"
                leftIcon={<Icon as={RiAddLine} fontSize="20" />}
              >
                Criar pesquisa
              </Button>
            </NextLink>
          </Flex>

          {isLoading ? (
            <Flex justify="center">
              <Spinner />
            </Flex>
          ) : error ? (
            <Flex justify="center">
              <Text>Falha ao obter dados das pesquisas</Text>
            </Flex>
          ) : (
            <>
              <Table colorScheme="whiteAlpha">
                <Thead>
                  <Tr>
                    <Th paddingX={["4", "4", "6"]} color="gray.300" width="8">
                      <Checkbox colorScheme="pink" />
                    </Th>
                    <Th>Nome</Th>
                    {isWideVersion && <Th>Data de cadastro</Th>}
                    <Th width="8"></Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {data.researches.map((research) => (
                    <Tr key={research.id}>
                      <Td paddingX={["4", "4", "6"]}>
                        <Checkbox colorScheme="pink" />
                      </Td>
                      <Td>
                        <Box>
                          <Link color="purple.400">
                            <Text fontWeight="bold">{research.name}</Text>
                          </Link>
                          <Text fontSize="sm" color="gray.300">
                            research.email
                          </Text>
                        </Box>
                      </Td>
                      {isWideVersion && <Td> {research.createdAt} </Td>}
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
                  ))}
                </Tbody>
              </Table >

              <Pagination
                totalCountOfRegisters={data.totalCount}
                currentPage={page}
                onPageChange={setPage}
              />
            </>
          )}
        </Box >
      </Flex >
    </Flex>
  );
}
