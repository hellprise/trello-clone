import { Boards } from '@prisma/client'
import { useMutation, useQueryClient } from '@tanstack/react-query'

import { api } from '@/core/api'

import { createBoardDto } from '@/app/api/boards/dto'

import { useBoardsQueryKey } from './use-boards'

const createBoardFn = async (title: createBoardDto) => {
	const { data } = await api.post<Boards>('/api/boards', title)

	return data
}

export const useCreateBoard = () => {
	const queryClient = useQueryClient()

	const mutation = useMutation({
		mutationKey: ['create-board'],
		mutationFn: createBoardFn,
		onSettled: () => {
			queryClient.invalidateQueries(useBoardsQueryKey)
		},
	})

	return mutation
}
