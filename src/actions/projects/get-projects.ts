"use server"

import { db } from "@/lib/db"
import { Project } from "../../types/project/project"
import { projects as projectsSchema } from "@/db/schema"
import { isNull } from "drizzle-orm"

export async function getProjects() {
	const projects: Project[] = await db.select().from(projectsSchema).where(isNull(projectsSchema.deletedAt))

	return projects
}
