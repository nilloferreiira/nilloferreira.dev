"use client"

import { Modal } from "./modal"
import { Project } from "@/types/project/project"

interface Props {
	isOpen: boolean
	onClose: () => void
	project: Project | null
}

function handleEditProject(data: Project) {
	// Local default handling: log the edited project. Replace with real action if needed.
	console.log("handleEditProject", { data })
}

export function EditProjectModal({ isOpen, onClose, project }: Props) {
	if (!project) return null

	return (
		<Modal isOpen={isOpen} onClose={onClose} title="Edit Project" modalForm="edit-project-form" saveLabel="Save">
			<form
				id="edit-project-form"
				className="bg-shark p-4 rounded-lg space-y-3"
				onSubmit={(e) => {
					e.preventDefault()
					const form = new FormData(e.currentTarget as HTMLFormElement)
					const data: Project = {
						id: project.id,
						title: String(form.get("title") ?? ""),
						description_pt: String(form.get("description_pt") ?? ""),
						description_en: String(form.get("description_en") ?? ""),
						imgSrc: String(form.get("imgSrc") ?? ""),
						url: String(form.get("url") ?? "")
					}
					handleEditProject(data)
					onClose()
				}}
			>
				<div>
					<label className="block text-sm text-text-secondary mb-1">Title</label>
					<input
						name="title"
						defaultValue={project.title}
						required
						className="w-full p-2 rounded-md bg-shark border border-white/5"
					/>
				</div>

				<div>
					<label className="block text-sm text-text-secondary mb-1">Description (PT)</label>
					<textarea
						name="description_pt"
						defaultValue={project.description_pt}
						rows={3}
						className="w-full p-2 rounded-md bg-shark border border-white/5"
					/>
				</div>

				<div>
					<label className="block text-sm text-text-secondary mb-1">Description (EN)</label>
					<textarea
						name="description_en"
						defaultValue={project.description_en}
						rows={3}
						className="w-full p-2 rounded-md bg-shark border border-white/5"
					/>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 gap-3">
					<div>
						<label className="block text-sm text-text-secondary mb-1">Image URL</label>
						<input
							name="imgSrc"
							defaultValue={project.imgSrc}
							className="w-full p-2 rounded-md bg-shark border border-white/5"
						/>
					</div>
					<div>
						<label className="block text-sm text-text-secondary mb-1">Project URL</label>
						<input
							name="url"
							defaultValue={project.url}
							className="w-full p-2 rounded-md bg-shark border border-white/5"
						/>
					</div>
				</div>

				{/* Buttons are handled by Modal footer via modalForm */}
			</form>
		</Modal>
	)
}
