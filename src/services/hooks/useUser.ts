import { useQuery, UseQueryOptions, UseQueryResult } from "react-query";

import { User } from "../../interfaces/User";
import { api } from "../api";

interface GetUsersResponse {
  users: User[];
  totalCount: number;
}

export async function getUsers(page: number): Promise<GetUsersResponse> {
  const { data, headers } = await api.get('/usuarios', {
    params: {
      page
    }
  });

  const totalCount = Number(headers['x-total-count']);

  const users = data.users.map((user: User) => {
    return {
      id: user.id,
      name: user.name,
      email: user.email,
      createdAt: new Date(user['created_at']).toLocaleDateString('pt-BR', {
        day: '2-digit',
        month: 'long',
        year: 'numeric'
      })
    }
  });

  return {
    users, 
    totalCount
  };
}

export function useUsers(page: number, options: UseQueryOptions) {
  return useQuery(['users', page], () => getUsers(page), {
    staleTime: 1000 * 60 * 10, // 10 minutos
    ...options,
  }) as UseQueryResult<GetUsersResponse, unknown>
}