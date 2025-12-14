"use server"

import { db } from "@/lib/db"
import { Project } from "../../types/project/project"
import { projects as projectsSchema } from "@/db/schema"
import { eq } from "drizzle-orm"

export async function updateProject(data: Project) {
	const project = await db
		.update(projectsSchema)
		.set({
			title: data.title,
			description_en: data.description_en,
			description_pt: data.description_pt,
			imgSrc: data.imgSrc,
			url: data.url
		})
		.where(eq(projectsSchema.id, data.id))
		.returning()

	return project
}
