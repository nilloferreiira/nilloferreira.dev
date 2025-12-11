"use client"

import { AdminExperienceCard } from "@/components/admin/admin-experience-card"
import { AdminProjectCard } from "@/components/admin/admin-project-card"
import Modal from "@/components/admin/modal"
import { LoadingSpinner } from "@/components/loading/loading"
import { useExperiences } from "@/hooks/experiences/useExperiences"
import { useProjects } from "@/hooks/projects/useProjects"
import { Project } from "@/types/project/project"
import { useState } from "react"

export default function AdminPage() {
	const [isEditModalOpen, setIsEditModalOpen] = useState(false)
	const [isCreateModalOpen, setCreateIsModalOpen] = useState(false)

	const { data: projects, isLoading: isLoadingProjects } = useProjects()
	const { data: experiences, isLoading: isLoadingExperiences } = useExperiences()
	const isLoaded = !isLoadingProjects && !isLoadingExperiences

	function handleOpenCreateProject() {
		setCreateIsModalOpen(!isCreateModalOpen)
	}

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
								onClick={() => handleOpenCreateProject()}
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

			{/* Create Modal  */}
			<Modal
				isOpen={isCreateModalOpen}
				modalForm="create-project-form"
				onClose={() => setCreateIsModalOpen(false)}
				title="Create Project"
			>
				<form
					id="create-project-form"
					className="bg-shark p-4 rounded-lg space-y-3"
					onSubmit={(e) => {
						e.preventDefault()
						const form = new FormData(e.currentTarget as HTMLFormElement)
						const data = {
							id: String(Date.now()),
							title: String(form.get("title") ?? ""),
							description_pt: String(form.get("description_pt") ?? ""),
							description_en: String(form.get("description_en") ?? ""),
							imgSrc: String(form.get("imgSrc") ?? ""),
							url: String(form.get("url") ?? "")
						}
						handleCreateProject(data)
						setCreateIsModalOpen(false)
					}}
				>
					<div>
						<label className="block text-sm text-[var(--color-text-secondary)] mb-1">Title</label>
						<input
							name="title"
							required
							className="w-full p-2 rounded-md bg-[var(--color-shark)] border border-white/5"
						/>
					</div>

					<div>
						<label className="block text-sm text-[var(--color-text-secondary)] mb-1">Description (PT)</label>
						<textarea
							name="description_pt"
							rows={3}
							className="w-full p-2 rounded-md bg-[var(--color-shark)] border border-white/5"
						/>
					</div>

					<div>
						<label className="block text-sm text-[var(--color-text-secondary)] mb-1">Description (EN)</label>
						<textarea
							name="description_en"
							rows={3}
							className="w-full p-2 rounded-md bg-[var(--color-shark)] border border-white/5"
						/>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-2 gap-3">
						<div>
							<label className="block text-sm text-[var(--color-text-secondary)] mb-1">Image URL</label>
							<input name="imgSrc" className="w-full p-2 rounded-md bg-[var(--color-shark)] border border-white/5" />
						</div>
						<div>
							<label className="block text-sm text-[var(--color-text-secondary)] mb-1">Project URL</label>
							<input name="url" className="w-full p-2 rounded-md bg-[var(--color-shark)] border border-white/5" />
						</div>
					</div>
				</form>
			</Modal>
		</div>
	)
}
