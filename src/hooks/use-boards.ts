import { Boards } from '@prisma/client'
import { useQuery } from '@tanstack/react-query'

import { api } from '@/core/api'

const getBoardsFn = async () => {
	const { data } = await api.get<Boards[]>('/api/boards')

	return data
}

interface IUseBoardsOptions {
	initialData: Boards[]
}

export const useBoardsQueryKey = ['boards']

export const useBoards = ({ initialData }: IUseBoardsOptions) => {
	const query = useQuery({
		queryKey: useBoardsQueryKey,
		queryFn: getBoardsFn,
		initialData,
	})

	return query
}
