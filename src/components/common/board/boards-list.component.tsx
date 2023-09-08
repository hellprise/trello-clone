'use client'

import { Boards } from '@prisma/client'

import { useBoards } from '@/hooks'

import { BoardCard } from './board-card.component'
import { CreateBoard } from './create-board.component'

interface IBoardsListProps {
	initialData: Boards[]
}

export const BoardsList = ({ initialData }: IBoardsListProps) => {
	const { data: boards } = useBoards({ initialData })

	return (
		<>
			<section className='container grid min-[640px]:grid-cols-2 lg:grid-cols-3 gap-5 px-3 2xl:grid-cols-4'>
				{boards.map(board => (
					<BoardCard key={board.id} id={board.id} title={board.title} />
				))}

				<CreateBoard />
			</section>
		</>
	)
}
