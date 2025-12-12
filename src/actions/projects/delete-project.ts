"use server"

import { db } from "@/lib/db"
import { Project } from "../../types/project/project"
import { projects as projectsSchema } from "@/db/schema"
import { eq } from "drizzle-orm"

export async function deleteProject(id: number) {
	const project = db
		.update(projectsSchema)
		.set({
			deletedAt: new Date()
		})
		.where(eq(projectsSchema.id, id))
	return project
}
