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
import { useMutation } from "@tanstack/react-query"
import { queryClient } from "@/lib/react-query"
import { deleteProject } from "@/actions/projects/delete-project"

export default function AdminPage() {
	const [isCreateProjectOpen, setCreateProjectOpen] = useState(false)

	// modals and editing state
	const [isCreateExperienceOpen, setCreateExperienceOpen] = useState(false)
	const [isEditProjectOpen, setEditProjectOpen] = useState(false)
	const [isEditExperienceOpen, setEditExperienceOpen] = useState(false)

	const [editingProject, setEditingProject] = useState<Project | null>(null)
	const [editingExperience, setEditingExperience] = useState<Experience | null>(null)

	const { data: projects, isLoading: isLoadingProjects } = useProjects()
	const { data: experiences, isLoading: isLoadingExperiences } = useExperiences()
	const isLoaded = !isLoadingProjects && !isLoadingExperiences

	function openEditProjectModal(project: Project) {
		setEditingProject(project)
		setEditProjectOpen(true)
	}

	const { mutateAsync: deleteProjectMutation, isPending } = useMutation({
		mutationFn: deleteProject,
		onSuccess: (_, variables) => {
			queryClient.setQueryData(["projects"], (oldData: Project[] | undefined) => {
				return oldData?.filter((p) => p.id !== variables) || []
			})
		}
	})

	async function handleDeleteProject(id: number) {
		await deleteProjectMutation(id)
	}

	function openEditExperience(experience: Experience) {
		setEditingExperience(experience)
		setEditExperienceOpen(true)
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
								onClick={() => setCreateProjectOpen(true)}
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
									<AdminProjectCard
										key={p.id}
										project={p}
										onEdit={openEditProjectModal}
										onDelete={() => handleDeleteProject(p.id)}
									/>
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

			{/* Modals */}
			<CreateProjectModal isOpen={isCreateProjectOpen} onClose={() => setCreateProjectOpen(false)} />

			<CreateExperienceModal isOpen={isCreateExperienceOpen} onClose={() => setCreateExperienceOpen(false)} />

			<EditProjectModal isOpen={isEditProjectOpen} onClose={() => setEditProjectOpen(false)} project={editingProject} />

			<EditExperienceModal
				isOpen={isEditExperienceOpen}
				onClose={() => setEditExperienceOpen(false)}
				experience={editingExperience}
			/>
		</div>
	)
}
