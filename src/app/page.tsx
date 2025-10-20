import { ExperienceContainer } from "@/components/experiences/experiences-container"
import { Header } from "@/components/header/header"
import { SwitchLanguage } from "@/components/language/switch"
import { ProjectContainer } from "@/components/projects/projects-container"

export default function Home() {
	return (
		<>
			<div className="absolute right-10 md:right-20 md:-mt-10">
				<SwitchLanguage />
			</div>
			<Header />
			<main className="lg:p-10 w-full flex flex-col items-center justify-center gap-20">
				<ExperienceContainer />
				<ProjectContainer />
			</main>
		</>
	)
}
