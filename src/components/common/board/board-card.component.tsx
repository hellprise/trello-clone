import Link from 'next/link'
import { FC } from 'react'

interface IBoardCardProps {
	id: string
	title: string
}

export const BoardCard: FC<IBoardCardProps> = ({ id, title }) => {
	return (
		<Link
			href={`/boards/${id}`}
			className='block p-6 bg-white h-fit border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700'
		>
			<h5 className='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
				{title}
			</h5>
		</Link>
	)
}
