'use client'

import { useClickAway } from '@uidotdev/usehooks'
import clsx from 'clsx'
import Image from 'next/image'
import { useState } from 'react'

export const UserDropdown = () => {
	const [isDropdownOpen, setIsDropdownOpen] = useState(false)

	const dropdownClasses = clsx({
		hidden: !isDropdownOpen,
	})

	const toggleDropdown = () => setIsDropdownOpen(prev => !prev)

	const dropdownRef = useClickAway<HTMLDivElement>(e => {
		const element = e.target as HTMLElement
		// if (e.target.closest('[data-dropdown-toggle="user-dropdown"]')) return
		if (element.closest('#user-menu-button')) return

		setIsDropdownOpen(false)
	})

	return (
		<section className='flex items-center'>
			<button
				type='button'
				onClick={toggleDropdown}
				className='flex mr-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600'
				id='user-menu-button'
				aria-expanded='false'
				data-dropdown-toggle='user-dropdown'
				data-dropdown-placement='bottom'
			>
				<span className='sr-only'>Open user menu</span>
				<Image
					className='rounded-full'
					src='/assets/profile-picture-3.jpg'
					width={40}
					height={40}
					alt='user avatar'
					id='user-avatar'
				/>
			</button>

			<div
				className={clsx(
					'z-50 my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600 absolute top-12 right-0',
					dropdownClasses
				)}
				id='user-dropdown'
				ref={dropdownRef}
			>
				<div className='px-4 py-3'>
					<span className='block text-sm text-gray-900 dark:text-white'>
						Bonnie Green
					</span>
					<span className='block text-sm  text-gray-500 truncate dark:text-gray-400'>
						name@flowbite.com
					</span>
				</div>

				<ul className='py-2' aria-labelledby='user-menu-button'>
					<li>
						<a
							href='#'
							className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white'
						>
							Dashboard
						</a>
					</li>

					<li>
						<a
							href='#'
							className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white'
						>
							Settings
						</a>
					</li>

					<li>
						<a
							href='#'
							className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white'
						>
							Earnings
						</a>
					</li>

					<li>
						<a
							href='#'
							className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white'
						>
							Sign out
						</a>
					</li>
				</ul>
			</div>
		</section>
	)
}
