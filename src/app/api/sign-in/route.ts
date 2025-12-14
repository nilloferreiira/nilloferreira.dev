import { NextRequest, NextResponse } from "next/server"
import { createHash } from "node:crypto"
import { env } from "@/lib/env"
import { z } from "zod"

const loginSchema = z.object({
	email: z.email("Email inválido"),
	password: z.string().min(6, "A senha deve ter pelo menos 6 caracteres")
})

export async function POST(request: NextRequest) {
	const ADMIN_EMAIL = env.ADMIN_EMAIL
	const ADMIN_PASSWORD = env.ADMIN_PASSWORD

	const body = await request.json()
	const parsedBody = loginSchema.safeParse(body)
	const sessions = new Set<string>()

	if (!parsedBody.success) {
		return NextResponse.json({ message: "Dados inválidos", errors: parsedBody.error.message }, { status: 400 })
	}

	// hash da senha
	const { email, password } = parsedBody.data
	const hashedPassword = createHash("sha256").update(password).digest("hex")
	// enviar os dados pro banco e validar
	// const exists = db.query.users.findFirst({
	// 	where: (users, { eq }) => eq(users.email, email) && eq(users.password, hashedPassword)
	// })

	// if (!exists) {
	// 	return NextResponse.json({ message: "Email ou senha inválidos" }, { status: 401 })
	// }

	if (email !== ADMIN_EMAIL || password !== ADMIN_PASSWORD) {
		return Response.json({ error: "Credenciais inválidas" }, { status: 401 })
	}

	const sessionId = crypto.randomUUID()
	sessions.add(sessionId)

	const response = NextResponse.json({ ok: true, message: "Login realizado com sucesso" })

	response.cookies.set({
		name: "session",
		value: sessionId,
		httpOnly: true,
		sameSite: "lax",
		path: "/"
	})

	return response
}
