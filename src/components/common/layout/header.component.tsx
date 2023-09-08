import Link from 'next/link'

import { UserDropdown } from '@/components'

import { ROUTES } from '@/utils'

export const Header = () => {
	return (
		<nav className='bg-white border-gray-200 dark:bg-gray-800 mb-10'>
			<div className='container relative flex flex-wrap items-center justify-between px-3 py-4'>
				<Link href={ROUTES.HOME} className='flex items-center'>
					<span className='self-center text-2xl font-semibold whitespace-nowrap dark:text-white'>
						Trello
					</span>
				</Link>

				<UserDropdown />
			</div>
		</nav>
	)
}
