import { NextRequest, NextResponse } from "next/server"

export function middleware(request: NextRequest) {
	const session = request.cookies.get("session")

	const isAdminPath = request.nextUrl.pathname.startsWith("/admin")
	const isLoginPath = request.nextUrl.pathname === "/admin/login"

	if (isAdminPath && !isLoginPath && !session) {
		const redirectUrl = request.nextUrl.clone()
		redirectUrl.pathname = "/"
		return NextResponse.redirect(redirectUrl)
	}
}

export const config = {
	// matcher: ["/((?!api|_next/static|_next/image|.*\\.png$).*)"]
	matcher: ["/admin/:path*"]
}
