export const runtime = "nodejs"

import { NextRequest, NextResponse } from "next/server"
import { experiences as experiencesSchema } from "@/db/schema"
import { db } from "@/lib/db"
import { isNull } from "drizzle-orm"

export async function GET() {
	try {
		const experiences = await db.select().from(experiencesSchema).where(isNull(experiencesSchema.deletedAt))
		return NextResponse.json({ ok: true, data: experiences })
	} catch (err) {
		console.error("GET /api/experiences error:", err)
		return NextResponse.json({ ok: false, error: "Erro ao buscar experiências" }, { status: 500 })
	}
}

export async function POST(request: NextRequest) {
	try {
		const body = await request.json()
		const created = await db
			.insert(experiencesSchema)
			.values({
				title_pt: body.title_pt,
				title_en: body.title_en,
				description_en: body.description_en,
				description_pt: body.description_pt
			})
			.returning()

		return NextResponse.json({ ok: true, data: created })
	} catch (err) {
		console.error("POST /api/experiences error:", err)
		return NextResponse.json({ ok: false, error: "Erro ao criar experiência" }, { status: 500 })
	}
}
