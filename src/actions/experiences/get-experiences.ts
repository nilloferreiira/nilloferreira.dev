import type { Experience } from "@/types/experience/experience"

export async function getExperiences() {
	// Simula delay de chamada à API
	await new Promise((resolve) => setTimeout(resolve, 500))

	const experiences: Experience[] = [
		{
			id: "1",
			title_en: "Experience",
			title_pt: "Experiência",
			description_en:
				"Self-taught in front-end development since 2020, currently focused on development with React and Next.js, alongside building REST APIs with Node.js.",
			description_pt:
				"Estudo desenvolvimento front-end desde 2020, atualmente com foco em React e Next.js, também trabalho na construção de APIs REST com Node.js."
		},
		{
			id: "2",
			title_en: "Education",
			title_pt: "Educação",
			description_en: "Associate Degree in Systems Analysis and Development - Universidade Tiradentes 🎓",
			description_pt: "Graduação em Análise e Desenvolvimento de Sistemas - Universidade Tiradentes 🎓"
		},
		{
			id: "3",
			title_en: "Languages",
			title_pt: "Idiomas",
			description_en: "🇺🇸 English \n 🇧🇷 Portuguese",
			description_pt: "🇺🇸 Inglês \n 🇧🇷 Português"
		}
	]

	return experiences
}
