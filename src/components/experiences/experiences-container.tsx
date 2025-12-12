"use client"

import { useLanguage } from "@/hooks/useLanguage"
import { Experience } from "./experience"
import type { Experience as ExperienceType } from "@/types/experience/experience"

interface ExperiencesContainerProps {
	experiences: ExperienceType[]
}

export function ExperienceContainer({ experiences }: ExperiencesContainerProps) {
	const { language } = useLanguage()

	return (
		<div className="w-full flex flex-col items-center lg:flex-row lg:items-start justify-evenly mx-auto gap-12 lg:gap-16">
			{/* //TODO foreach de experience */}
			{experiences &&
				experiences.map((experience) => (
					<Experience
						key={experience.id}
						language={language}
						title_en={experience.title_en}
						title_pt={experience.title_pt}
						description_en={experience.description_en}
						description_pt={experience.description_pt}
					/>
				))}
		</div>
	)
}
