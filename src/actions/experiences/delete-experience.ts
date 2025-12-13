"use server"

import { db } from "@/lib/db"
import { experiences as experiencesSchema } from "@/db/schema"
import { eq } from "drizzle-orm"

export async function deleteExperience(id: number) {
	const experience = await db
		.update(experiencesSchema)
		.set({
			deletedAt: new Date()
		})
		.where(eq(experiencesSchema.id, id))

	return experience
}
