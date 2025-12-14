import { NextRequest } from "next/server"

export async function GET(request: NextRequest) {
	const session = request.cookies.get("session")

	if (session) {
		request.cookies.delete("session")
	}
}
