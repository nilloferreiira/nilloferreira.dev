"use server"

import { db } from "@/lib/db"
import { Experience } from "@/types/experience/experience"
import { experiences as experiencesSchema } from "@/db/schema"
import { eq } from "drizzle-orm"

export async function updateExperience(data: Experience) {
	const experience = await db
		.update(experiencesSchema)
		.set({
			title_en: data.title_en,
			title_pt: data.title_pt,
			description_en: data.description_en,
			description_pt: data.description_pt
		})
		.where(eq(experiencesSchema.id, data.id))
		.returning()

	return experience
}
