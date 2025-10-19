"use client"

import { useLanguage } from "@/hooks/useLanguage"
import { Experience } from "./experience"

export function ExperienceContainer() {
	const { language } = useLanguage()

	return (
		<div className="w-full flex flex-col lg:flex-row lg:items-start lg:justify-between mx-auto gap-10">
			{/* //TODO foreach de experience */}
			<Experience
				language={language}
				title_en={"Experience"}
				title_pt={"Experiência"}
				description_en={
					"Self-taught in front-end development since 2020, currently focused on development with React and Next.js, alongside building REST APIs with Node.js."
				}
				description_pt={
					"Estudo desenvolvimento front-end desde 2020, atualmente com foco em React e Next.js, também trabalho na construção de APIs REST com Node.js."
				}
			/>

			<Experience
				language={language}
				title_en={"Education"}
				title_pt={"Educação"}
				description_en={"Associate Degree in Systems Analysis and Development - Universidade Tiradentes 🎓"}
				description_pt={"Graduação em Análise e Desenvolvimento de Sistemas - Universidade Tiradentes 🎓"}
			/>

			<Experience
				language={language}
				title_en={"Languages"}
				title_pt={"Idiomas"}
				description_en={"🇺🇸 English \n 🇧🇷 Portuguese"}
				description_pt={"🇺🇸 Inglês \n 🇧🇷 Português"}
			/>
		</div>
	)
}
