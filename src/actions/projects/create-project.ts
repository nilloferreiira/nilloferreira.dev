"use server"

import { db } from "@/lib/db"
import { Project } from "../../types/project/project"
import { projects as projectsSchema } from "@/db/schema"

export async function createProject(data: Project) {
	const project = db
		.insert(projectsSchema)
		.values({
			title: data.title,
			description_en: data.description_en,
			description_pt: data.description_pt,
			imgSrc: data.imgSrc,
			url: data.url
		})
		.returning()

	return project
}
