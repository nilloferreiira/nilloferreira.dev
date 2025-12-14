import { z } from "zod"

const EnvSchema = z.object({
	DATABASE_URL: z.url(),
	ADMIN_EMAIL: z.email(),
	ADMIN_PASSWORD: z.string().min(6)
})

export const env = EnvSchema.parse(process.env)
