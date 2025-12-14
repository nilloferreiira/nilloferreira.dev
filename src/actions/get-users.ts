"use server"

import { db } from "@/lib/db"
import { users as usersSchema } from "@/db/schema"

export async function getUsers() {
	const users = await db.select().from(usersSchema)

	return users
}
