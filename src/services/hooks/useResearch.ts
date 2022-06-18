import { useQuery, UseQueryOptions, UseQueryResult } from "react-query";

import { IResearch } from "../../interfaces/IResearch";
import { api } from "../api";

interface GetResearchesResponse {
  researches: IResearch[];
  totalCount: number;
}

export async function getResearches(page: number): Promise<GetResearchesResponse> {
  const { data, headers } = await api.get('/pesquisas', {
    params: {
      page
    }
  });

  const totalCount = Number(headers['x-total-count']);

  const researches = data.researches.map((research: IResearch) => {
    return {
      id: research.id,
      status: research.status,
      name: research.name,
      version: research.version,
      createdAt: new Date(research.createdAt).toLocaleDateString('pt-BR', {
        day: '2-digit',
        month: 'long',
        year: 'numeric'
      })
    }
  });

  return {
    researches, 
    totalCount
  };
}

export function useResearches(page: number, options: UseQueryOptions) {
  return useQuery(['researches', page], () => getResearches(page), {
    staleTime: 1000 * 60 * 10, // 10 minutos
    ...options,
  }) as UseQueryResult<GetResearchesResponse, unknown>
}