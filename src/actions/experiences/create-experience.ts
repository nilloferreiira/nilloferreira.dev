"use server"

import { db } from "@/lib/db"
import { experiences as experiencesSchema } from "@/db/schema"
import { Experience } from "@/types/experience/experience"

export async function createExperience(data: Experience) {
	const experience = await db
		.insert(experiencesSchema)
		.values({
			title_pt: data.title_pt,
			title_en: data.title_en,
			description_en: data.description_en,
			description_pt: data.description_pt
		})
		.returning()

	return experience
}
