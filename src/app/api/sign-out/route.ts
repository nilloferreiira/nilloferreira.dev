import { NextRequest, NextResponse } from "next/server"

export async function GET(request: NextRequest) {
	const session = request.cookies.get("session")
	const res = NextResponse.json({ ok: true, message: "Signed out successfully" })
	if (session) {
		res.cookies.delete("session")
	}
	return res
}
