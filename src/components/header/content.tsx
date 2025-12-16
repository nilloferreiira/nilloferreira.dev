"use client"

import { useLanguage } from "@/hooks/useLanguage"
import { Mail } from "lucide-react"
import { Links } from "./links"

export function HeaderContent() {
	const { language } = useLanguage()

	return (
		<div className="flex flex-col gap-5 items-center md:items-start justify-center">
			{/* text content  */}
			<div className="p-8">
				<h1 className="text-4xl lg:text-5xl text-zinc-100 font-semibold  sm-mx-auto text-center lg:text-left">
					{language === "en" ? "Hi I'm Danillo" : "Olá! Eu sou o Danillo"}

					<span>&#128075;</span>
				</h1>
				<div className="p-2">
					<h2
						className={`
                            ${language === "en" ? "text-2xl" : "text-xl"}
                            lg:text-4xl 
                            text-text-secondary 
                            tracking-widest whitespace-nowrap	
                            overflow-hidden 
                            border-r-2 border-text-secondary 
                            typing-animation
                        `}
					>
						{language === "en" ? "Software Developer" : "Desenvolvedor de Software"}
					</h2>
				</div>
			</div>

			<div className="px-8">
				<div className="flex flex-col  gap-2">
					<span className="text-text-secondary">
						<strong className="text-zinc-100">{language === "en" ? "Degree: " : "Formação: "}</strong>
						{language === "en" ? "Systems Analysis and Development" : "Análise e Desenvolvimento de Sistemas"}
					</span>
					<span className="text-text-secondary flex items-center gap-2">
						<strong className="text-zinc-100">{language === "en" ? "English" : "Inglês"}</strong>
						<span className="text-text-secondary">—</span>
						<span className="text-text-secondary">
							{language === "en" ? "B2 (Upper-intermediate)" : "nível B2 (intermediário avançado)"}
						</span>
					</span>
				</div>
			</div>

			{/* links  */}
			<div className="w-96 space-y-5">
				<Links />
				<a
					href="mailto:nilloferreiira@gmail.com"
					className="bg-shark rounded-full py-4  w-4/5 mx-auto font-bold text-zinc-100 flex items-center justify-center gap-2 hover:bg-shark/80"
				>
					{language === "en" ? "Contact me" : "Me contate"} <Mail />
				</a>
			</div>
		</div>
	)
}
