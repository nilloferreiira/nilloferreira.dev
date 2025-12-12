import { env } from "@/lib/env"
import { defineConfig } from "drizzle-kit"

export default defineConfig({
	dialect: "postgresql",
	schema: "./db/schema.ts",
	out: "./db/migrations",
	dbCredentials: {
		url: env.DATABASE_URL
	}
})
