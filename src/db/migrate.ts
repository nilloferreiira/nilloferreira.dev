import { migrate } from "drizzle-orm/postgres-js/migrator"
import { db } from "@/lib/db"

async function main() {
	try {
		await migrate(db, { migrationsFolder: "./drizzle" }) // Caminho para a pasta de migrations gerada
		console.log("Migrations completas!")
		// await migrationClient.end()
	} catch (error) {
		console.error("Erro durante a migração:", error)
		process.exit(1)
	}
}

main()
