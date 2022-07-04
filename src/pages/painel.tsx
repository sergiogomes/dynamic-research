import React from 'react';
import { Flex, SimpleGrid } from '@chakra-ui/react';

import { Header } from '../components/Header';
import { Sidebar } from '../components/Sidebar';
import { AreaChart } from '../components/Charts/AreaChart';

const categories = [
  '2021-03-17T00:00:00.000Z',
  '2021-03-18T00:00:00.000Z',
  '2021-03-19T00:00:00.000Z',
  '2021-03-20T00:00:00.000Z',
  '2021-03-21T00:00:00.000Z',
  '2021-03-22T00:00:00.000Z',
  '2021-03-23T00:00:00.000Z',
];

const series = [
  { name: 'Número de acessos', data: [31, 120, 10, 28, 61, 18, 109] },
  { name: 'Pesquisas respondidas', data: [23, 90, 7, 20, 45, 12, 76] },
  { name: 'CTAs clicados', data: [9, 41, 3, 9, 13, 6, 31] },
];

export default function Dashboard() {
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

        <SimpleGrid flex="1" gap="4" minChildWidth="320px" alignItems="flex-start">
          <AreaChart categories={categories} series={series} />
        </SimpleGrid>
      </Flex>
    </Flex>
  );
}
