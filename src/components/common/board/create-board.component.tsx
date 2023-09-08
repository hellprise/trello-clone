'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { useCreateBoard } from '@/hooks'
import { useState } from 'react'
import { Input } from '../ui-kit/input.component'

const createBoardSchema = z.object({
	title: z.string().min(1).max(20),
})

type CreateBoardValues = z.infer<typeof createBoardSchema>

export const CreateBoard = () => {
	const [isFormOpened, setIsFormOpened] = useState(false)

	const {
		register,
		handleSubmit,
		formState: { errors, isSubmitting },
	} = useForm<CreateBoardValues>({
		resolver: zodResolver(createBoardSchema),
	})

	const { mutateAsync } = useCreateBoard()

	const onSubmit = handleSubmit(async ({ title }) => {
		await mutateAsync({ title })
		setIsFormOpened(false)
	})

	const toggleIsCreating = () => setIsFormOpened(prev => !prev)

	return (
		<section className='block p-4 bg-gray-100 border border-gray-200 rounded-lg shadow h-fit hover:bg-gray-100 dark:bg-gray-700 dark:border-gray-600 dark:hover:bg-gray-600'>
			{isFormOpened ? (
				<section className=''>
					<form onSubmit={onSubmit}>
						<Input
							label='Board heading'
							{...register('title')}
							error={errors.title?.message}
							disabled={isSubmitting}
						/>

						<div className='flex items-center gap-2 mt-3'>
							<button
								type='submit'
								className='text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700'
							>
								Create board
							</button>

							<button type='button' onClick={toggleIsCreating}>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									className='h-8 w-8'
									fill='none'
									viewBox='0 0 24 24'
									stroke='currentColor'
								>
									<path
										strokeLinecap='round'
										strokeLinejoin='round'
										strokeWidth={2}
										d='M6 18L18 6M6 6l12 12'
									/>
								</svg>
							</button>
						</div>
					</form>
				</section>
			) : (
				<button
					onClick={toggleIsCreating}
					className='text-2xl text-left font-medium tracking-tight text-gray-900 dark:text-white'
				>
					+ Create a new board
				</button>
			)}
		</section>
	)
}
