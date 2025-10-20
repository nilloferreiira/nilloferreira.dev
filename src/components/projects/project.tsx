import type { Project } from "@/types/project/project"
import Image from "next/image"

interface ProjectProps {
	project: Project
	language: "en" | "pt-BR"
}

export function Project({ project, language }: ProjectProps) {
	return (
		<a
			href={project.url}
			target="_blank"
			className="w-full bg-bg rounded-xl overflow-hidden hover:bg-bg/60 transition-all cursor-pointer"
		>
			<Image src={project.imgSrc} alt="project-image" width={500} height={300} />

			{/* text container  */}
			<div className="p-4 space-y-4">
				<h3 className="text-zinc-100 font-semibold text-2xl">{project.title}</h3>
				<p className="text-text-secondary text-md lg:text-xl">
					{language === "en" ? project.description_en : project.description_pt}
				</p>
			</div>
		</a>
	)
}
