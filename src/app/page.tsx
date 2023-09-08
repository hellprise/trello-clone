import { BoardsList } from '@/components'

import { prisma } from '@/core/prisma'

export default async function Home() {
	const boards = await prisma.boards.findMany()

	return (
		<>
			<BoardsList initialData={boards} />
		</>
	)
}
