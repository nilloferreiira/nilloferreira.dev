"use client"

import Link from "next/link"
import { useRouter } from "next/navigation"
import { useForm } from "react-hook-form"
import { z } from "zod"

const loginSchema = z.object({
	email: z.email(),
	password: z.string().min(6)
})

type LoginFormInputs = z.infer<typeof loginSchema>

export default function AdminLoginPage() {
	const router = useRouter()
	const {
		register,
		handleSubmit,
		formState: { isSubmitting }
	} = useForm<LoginFormInputs>()

	async function onSubmit(data: LoginFormInputs) {
		const response = await fetch("/api/sign-in", {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify(data)
		})

		if (!response.ok) {
			const errorResult = await response.json()
			alert("Erro ao fazer login: " + (errorResult.error || errorResult.message))
			return
		}
		const result = await response.json()
		if (result.ok) {
			return router.push("/admin")
		}
	}

	return (
		<div className="min-h-screen flex items-center justify-center p-6 lg:p-12 text-white">
			<div className="w-full max-w-md">
				<div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-8 shadow-lg">
					<header className="mb-6">
						<h1 className="text-2xl lg:text-3xl font-bold">Admin Panel</h1>
						<p className="text-sm text-white/70">Faça login para acessar o painel administrativo</p>
					</header>

					<form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
						<label className="block">
							<span className="text-sm text-white/80">Email</span>
							<input
								type="email"
								{...register("email")}
								required
								placeholder="seu@exemplo.com"
								className="mt-1 w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-primary/30"
							/>
						</label>

						<label className="block">
							<span className="text-sm text-white/80">Senha</span>
							<input
								type="password"
								{...register("password")}
								required
								placeholder="••••••••"
								className="mt-1 w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-primary/30"
							/>
						</label>

						<div className="flex items-center justify-center">
							<button
								type="submit"
								className="bg-primary text-white px-4 py-2 rounded-2xl shadow hover:brightness-95 transition disabled:opacity-60"
								disabled={isSubmitting}
							>
								{isSubmitting ? "Entrando..." : "Entrar"}
							</button>
						</div>
					</form>
				</div>

				<p className="text-center text-white/60 mt-4 text-sm">
					Voltar para o site •{" "}
					<Link href="/" className="text-primary hover:underline">
						Home
					</Link>
				</p>
			</div>
		</div>
	)
}
