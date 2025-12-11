"use client"

import { AdminExperienceCard } from "@/components/admin/admin-experience-card"
import { AdminProjectCard } from "@/components/admin/admin-project-card"
import { LoadingSpinner } from "@/components/loading/loading"
import { useExperiences } from "@/hooks/experiences/useExperiences"
import { useProjects } from "@/hooks/projects/useProjects"
import { Project } from "@/types/project/project"

export default function AdminPage() {
	const { data: projects, isLoading: isLoadingProjects } = useProjects()
	const { data: experiences, isLoading: isLoadingExperiences } = useExperiences()
	const isLoaded = !isLoadingProjects && !isLoadingExperiences

	function handleCreateProject(data: any) {
		console.log("handleCreate", { data })
		// exemplo mínimo: apenas logar. O usuário pode ligar uma action real aqui.
	}

	function handleEditProject(project: Project) {
		console.log("handleEdit", { project })
	}

	function handleDeleteProject(id: string) {
		console.log("handleDelete", { id })
	}

	function handleCreateExperience(data: any) {
		console.log("handleCreate", { data })
		// exemplo mínimo: apenas logar. O usuário pode ligar uma action real aqui.
	}

	function handleEditExperience(experience: any) {
		console.log("handleEdit", { experience })
	}

	function handleDeleteExperience(id: string) {
		console.log("handleDelete", { id })
	}

	return (
		<div className="p-6 lg:p-12 bg-shark text-white rounded-xl">
			{!isLoaded ? (
				<LoadingSpinner />
			) : (
				<div className="max-w-6xl mx-auto">
					<header className="flex items-center justify-between mb-8">
						<h1 className="text-2xl lg:text-3xl font-bold">Admin Panel</h1>
						<div className="space-x-2">
							<button
								onClick={() => handleCreateProject({})}
								className="bg-purple text-white px-4 py-2 rounded-2xl shadow hover:brightness-95 transition"
							>
								New Project
							</button>
							<button
								onClick={() => handleCreateExperience({})}
								className="bg-transparent border border-purple text-purple px-4 py-2 rounded-2xl hover:bg-purple/10 transition"
							>
								New Experience
							</button>
						</div>
					</header>

					<section className="mb-10">
						<h2 className="text-xl font-semibold mb-4">Projects</h2>
						<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
							{projects &&
								projects.map((p) => (
									<AdminProjectCard key={p.id} project={p} onEdit={handleEditProject} onDelete={handleDeleteProject} />
								))}
						</div>
					</section>

					<section>
						<h2 className="text-xl font-semibold mb-4">Experiences</h2>
						<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
							{experiences &&
								experiences.map((e) => (
									<AdminExperienceCard
										key={e.id}
										experience={e}
										onEdit={handleEditExperience}
										onDelete={handleDeleteExperience}
									/>
								))}
						</div>
					</section>
				</div>
			)}
		</div>
	)
}
