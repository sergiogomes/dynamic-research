import { Box, Text, theme } from '@chakra-ui/react';
import dynamic from 'next/dynamic';

import { IChartSerie } from '../../interfaces/IChartSerie';

const Chart = dynamic(() => import('react-apexcharts'), {
  ssr: false,
});

interface AreaChartProps {
  categories: string[];
  series: IChartSerie[];
}

export const AreaChart = ({ categories, series }: AreaChartProps) => {

  const options = {
    chart: {
      toolbar: {
        show: false,
      },
      zoom: {
        enabled: false,
      },
      foreColor: theme.colors.gray[500],
    },
    grid: {
      show: false,
    },
    dataLabels: {
      enabled: false,
    },
    tooltip: {
      enabled: true,
      theme: 'dark',
    },
    xaxis: {
      type: "datetime" as any,
      axisBorder: {
        color: theme.colors.gray[600],
      },
      axisTicks: {
        color: theme.colors.gray[600]
      },
      categories,
    },
    fill: {
      opacity: 0.3,
      type: 'gradient',
      gradient: {
        shade: 'dark',
        opacityFrom: 0.7,
        opacityTo: 0.3
      }
    }
  };
  
  return (
    <Box
      padding={["6", "8"]}
      backgroundColor="gray.800"
      borderRadius={8}
      paddingBottom="4"
    >
      <Text fontSize="lg" marginBottom="4">
        Visão Geral
      </Text>
      <Chart
        type="area"
        height={160}
        options={options}
        series={series}
      />
    </Box>
  )
};
