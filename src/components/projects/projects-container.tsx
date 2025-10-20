"use client"

import { useLanguage } from "@/hooks/useLanguage"
import { useProjects } from "@/hooks/projects/useProjects"
import { Project } from "./project"
import { LoadingSpinner } from "../loading/loading"

export function ProjectContainer() {
	const { language } = useLanguage()
	const { data: projects, isLoading } = useProjects()

	return (
		<div className="bg-shark w-full flex flex-col items-start justify-center p-4 lg:p-16 rounded-lg space-y-6 lg:space-y-12">
			{isLoading ? (
				<h1 className="text-zinc-100 font-semibold text-3xl flex">
					Carregando meus projetos ... <LoadingSpinner />
				</h1>
			) : (
				<h1 className="text-zinc-100 font-semibold text-3xl">
					{language ? "My projects " : "Meus projetos "}&#x1F447;
				</h1>
			)}

			{/* projects grid  */}
			<div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-16">
				{/* project card  */}
				{projects &&
					projects.map((project) => (
						<Project
							key={project.id}
							language={language}
							project={{
								id: project.id,
								title: project.title,
								description_en: project.description_en,
								description_pt: project.description_pt,
								imgSrc: project.imgSrc,
								url: project.url
							}}
						/>
					))}
			</div>
		</div>
	)
}
