import clsx from 'clsx'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import { Header } from '@/components'

import { ReactQueryProvider } from '@/providers'

import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
	title: 'Trello clone',
	description: 'Trello clone built with Next.js and Tailwind CSS',
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang='en'>
			<body className={clsx('dark bg-gray-900', inter.className)}>
				<ReactQueryProvider>
					<Header />

					{children}
				</ReactQueryProvider>
			</body>
		</html>
	)
}
