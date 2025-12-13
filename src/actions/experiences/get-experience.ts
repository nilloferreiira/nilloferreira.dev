"use server"

import { experiences as experiencesSchema } from "@/db/schema"
import { Experience } from "@/types/experience/experience"
import { isNull } from "drizzle-orm"
import { db } from "@/lib/db"

export async function getExperiences() {
	const experiences: Experience[] = await db.select().from(experiencesSchema).where(isNull(experiencesSchema.deletedAt))

	return experiences
}
