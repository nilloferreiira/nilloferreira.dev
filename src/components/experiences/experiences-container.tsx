"use client"

import { useLanguage } from "@/hooks/useLanguage"
import { Experience } from "./experience"
import { useLayoutEffect, useState } from "react"
import type { Experience as ExperienceType } from "@/types/experience/experience"
import { getExperiences } from "@/actions/experiences/get-experiences"

export function ExperienceContainer() {
	const { language } = useLanguage()
	const [experiences, setExperiences] = useState<ExperienceType[]>([])

	useLayoutEffect(() => {
		async function fetchExperiences() {
			const data = await getExperiences()
			setExperiences(data)
		}

		fetchExperiences()
	}, [])

	return (
		<div className="w-full flex flex-col items-center lg:flex-row lg:items-start lg:justify-between mx-auto gap-12 lg:gap-16">
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
