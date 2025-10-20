"use server"

import { Project } from "../../types/project/project"

export async function getProjects() {
	// Simula delay de chamada à API
	await new Promise((resolve) => setTimeout(resolve, 800))

	const projects: Project[] = [
		{
			id: "1",
			title: "Read.ED",
			description_pt: "Sua biblioteca pessoal online!",
			description_en: "Your personal online library!",
			imgSrc: "https://github.com/nilloferreiira/readed/raw/main/src/assets/readmeimg.png",
			url: "https://readed.vercel.app/"
		},
		{
			id: "2",
			title: "Type Quotes",
			description_pt:
				"Aprimore suas habilidades de digitação enquanto mergulha na filosofia com as citações deste aplicativo",
			description_en: "Enhance your typing skills while diving into philosophy with the quotes from this app!",
			imgSrc: "https://github.com/nilloferreiira/type-quotes/raw/main/public/assets/readmeimg.png",
			url: "https://type-quotes.vercel.app/"
		},
		{
			id: "3",
			title: "AI movie",
			description_pt: "Escolha seu próximo filme usando IA",
			description_en: "Choose your next movie using AI",
			imgSrc: "https://github.com/nilloferreiira/ai-movie/blob/main/public/assets/readmeimg.png?raw=true",
			url: "https://ai-movie-nilloferreiira.vercel.app/"
		},
		{
			id: "4",
			title: "In.Orbit",
			description_pt: "Um Aplicativo de gerenciamento de metas.",
			description_en: "A goal management application.",
			imgSrc: "https://github.com/nilloferreiira/InOrbit-web/raw/main/public/assets/readmeimg.png",
			url: "https://github.com/nilloferreiira/InOrbit-web"
		},
		{
			id: "5",
			title: "Expert Notes",
			description_pt: "Um aplicativo de notas feito em React",
			description_en: "An notes application with React",
			imgSrc: "https://github.com/nilloferreiira/NLW-Expert/raw/master/public/readmeimg.png",
			url: "https://expert-notes-nilloferreiira.vercel.app/"
		},
		{
			id: "6",
			title: "Legacy Homes",
			description_pt: "Landing page moderna com animações.",
			description_en: "Modern landing page with animations.",
			imgSrc: "https://github.com/nilloferreiira/Legacy-Homes/raw/main/public/assets/readmeimg.png",
			url: "https://github.com/nilloferreiira/Legacy-Homes"
		},
		{
			id: "7",
			title: "Spotify UI clone",
			description_pt: "Clone da interface visual do Spotify",
			description_en: "Spotify ui clone",
			imgSrc: "https://github.com/nilloferreiira/Spotify-clone/raw/main/public/assets/readmeimg.png",
			url: "https://spotify-clone-opal-ten.vercel.app/"
		}
	]

	return projects
}
