"use client"

import { AdminExperienceCard } from "@/components/admin/admin-experience-card"
import { AdminProjectCard } from "@/components/admin/admin-project-card"
import { CreateProjectModal } from "@/components/admin/create-project-modal"
import { CreateExperienceModal } from "@/components/admin/create-experience-modal"
import { EditProjectModal } from "@/components/admin/edit-project-modal"
import { EditExperienceModal } from "@/components/admin/edit-experience-modal"
import { LoadingSpinner } from "@/components/loading/loading"
import { useExperiences } from "@/hooks/experiences/useExperiences"
import { useProjects } from "@/hooks/projects/useProjects"
import { Project } from "@/types/project/project"
import type { Experience } from "@/types/experience/experience"
import { useState } from "react"

export default function AdminPage() {
	const [isEditModalOpen, setIsEditModalOpen] = useState(false)
	const [isCreateModalOpen, setCreateIsModalOpen] = useState(false)

	// modals and editing state
	const [isCreateExperienceOpen, setCreateExperienceOpen] = useState(false)
	const [isEditProjectOpen, setEditProjectOpen] = useState(false)
	const [isEditExperienceOpen, setEditExperienceOpen] = useState(false)

	const [editingProject, setEditingProject] = useState<Project | null>(null)
	const [editingExperience, setEditingExperience] = useState<Experience | null>(null)

	const { data: projects, isLoading: isLoadingProjects } = useProjects()
	const { data: experiences, isLoading: isLoadingExperiences } = useExperiences()
	const isLoaded = !isLoadingProjects && !isLoadingExperiences

	function toggleCreateProjectModal() {
		setCreateIsModalOpen(!isCreateModalOpen)
	}

	function handleCreateProject(data: any) {
		console.log("handleCreateProject", { data })
		// exemplo mínimo: apenas logar. O usuário pode ligar uma action real aqui.
	}

	function openEditProject(project: Project) {
		setEditingProject(project)
		setEditProjectOpen(true)
	}

	function submitEditProject(project: Project) {
		console.log("submitEditProject", { project })
		setEditProjectOpen(false)
		setEditingProject(null)
	}

	function handleDeleteProject(id: string) {
		console.log("handleDeleteProject", { id })
	}

	function toggleCreateProjectExperience() {
		setCreateIsModalOpen(!isCreateModalOpen)
	}

	function handleCreateExperience(data: any) {
		console.log("handleCreateExperience", { data })
	}

	function openEditExperience(experience: Experience) {
		setEditingExperience(experience)
		setEditExperienceOpen(true)
	}

	function submitEditExperience(experience: Experience) {
		console.log("submitEditExperience", { experience })
		setEditExperienceOpen(false)
		setEditingExperience(null)
	}

	function handleDeleteExperience(id: string) {
		console.log("handleDeleteExperience", { id })
	}

	return (
		<div className="p-6 lg:p-12 bg-shark text-white rounded-xl min-h-screen">
			{!isLoaded ? (
				<LoadingSpinner />
			) : (
				<div className="max-w-6xl mx-auto">
					<header className="flex items-center justify-between mb-8">
						<h1 className="text-2xl lg:text-3xl font-bold">Admin Panel</h1>
						<div className="space-x-2">
							<button
								onClick={() => toggleCreateProjectModal()}
								className="bg-purple text-white px-4 py-2 rounded-2xl shadow hover:brightness-95 transition"
							>
								New Project
							</button>
							<button
								onClick={() => setCreateExperienceOpen(true)}
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
									<AdminProjectCard key={p.id} project={p} onEdit={openEditProject} onDelete={handleDeleteProject} />
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
										onEdit={openEditExperience}
										onDelete={handleDeleteExperience}
									/>
								))}
						</div>
					</section>
				</div>
			)}

			{/* Create Project Modal (separated) */}
			<CreateProjectModal
				isOpen={isCreateModalOpen}
				onClose={() => setCreateIsModalOpen(false)}
				onCreate={(data) => handleCreateProject(data)}
			/>

			<CreateExperienceModal
				isOpen={isCreateExperienceOpen}
				onClose={() => setCreateExperienceOpen(false)}
				onCreate={(data) => handleCreateExperience(data)}
			/>

			<EditProjectModal
				isOpen={isEditProjectOpen}
				onClose={() => setEditProjectOpen(false)}
				project={editingProject}
				onSave={(p) => submitEditProject(p)}
			/>

			<EditExperienceModal
				isOpen={isEditExperienceOpen}
				onClose={() => setEditExperienceOpen(false)}
				experience={editingExperience}
				onSave={(e) => submitEditExperience(e)}
			/>
		</div>
	)
}
