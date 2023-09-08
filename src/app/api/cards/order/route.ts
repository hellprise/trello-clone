import { NextResponse } from 'next/server'

import { prisma } from '@/core/prisma'

import { updateCardOrderDto } from '../dto'

export async function PATCH(req: Request) {
	const bodyRaw = await req.json()

	const validateBody = updateCardOrderDto.safeParse(bodyRaw)

	if (!validateBody.success) {
		return NextResponse.json(validateBody.error.issues, { status: 400 })
	}

	const queries = validateBody.data.map(({ id, order }) => {
		return prisma.cards.update({
			where: {
				id,
			},
			data: {
				order,
			},
		})
	})

	await prisma.$transaction(queries)

	return NextResponse.json({}, { status: 200 })
}
