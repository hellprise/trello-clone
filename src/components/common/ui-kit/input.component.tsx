'use client'

import clsx from 'clsx'
import {
	DetailedHTMLProps,
	InputHTMLAttributes,
	forwardRef,
	useId,
} from 'react'

interface IInputProps
	extends DetailedHTMLProps<
		InputHTMLAttributes<HTMLInputElement>,
		HTMLInputElement
	> {
	label: string
	error?: string
}

export const Input = forwardRef<HTMLInputElement, IInputProps>(function Input(
	{ className, label, error, ...props }: IInputProps,
	ref
) {
	const id = useId()

	console.log('error', error)
	return (
		<div className='flex flex-col relative z-0 w-full group'>
			<input
				{...props}
				id={id}
				className={clsx(
					'block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer',
					className
				)}
				ref={ref}
				placeholder=''
			/>
			<label
				htmlFor={id}
				className='peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'
			>
				{label}
			</label>
			{error && (
				<p className='mt-2 text-sm text-red-600 dark:text-red-500'>
					<span className='font-medium'>Oops!</span> {error}
				</p>
			)}
		</div>
	)
})
