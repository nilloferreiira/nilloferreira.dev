"use client"

import { Modal } from "./modal"
import type { Experience } from "@/types/experience/experience"

interface Props {
	isOpen: boolean
	onClose: () => void
}

function handleCreateExperience(data: Experience) {
	// Local default handling: log the created experience. Replace with real action if needed.
	console.log("handleCreateExperience", { data })
}

export function CreateExperienceModal({ isOpen, onClose }: Props) {
	return (
		<Modal
			isOpen={isOpen}
			onClose={onClose}
			title="Create Experience"
			modalForm="create-experience-form"
			saveLabel="Create"
		>
			<form
				id="create-experience-form"
				className="bg-shark p-4 rounded-lg space-y-3"
				onSubmit={(e) => {
					e.preventDefault()
					const form = new FormData(e.currentTarget as HTMLFormElement)
					const data: Experience = {
						id: String(Date.now()),
						title_en: String(form.get("title_en") ?? ""),
						title_pt: String(form.get("title_pt") ?? ""),
						description_en: String(form.get("description_en") ?? ""),
						description_pt: String(form.get("description_pt") ?? "")
					}
					handleCreateExperience(data)
					onClose()
				}}
			>
				<div>
					<label className="block text-sm text-text-secondary mb-1">Title (PT)</label>
					<input name="title_pt" required className="w-full p-2 rounded-md bg-shark border border-white/5" />
				</div>

				<div>
					<label className="block text-sm text-text-secondary mb-1">Title (EN)</label>
					<input name="title_en" className="w-full p-2 rounded-md bg-shark border border-white/5" />
				</div>

				<div>
					<label className="block text-sm text-text-secondary mb-1">Description (PT)</label>
					<textarea name="description_pt" rows={3} className="w-full p-2 rounded-md bg-shark border border-white/5" />
				</div>

				<div>
					<label className="block text-sm text-text-secondary mb-1">Description (EN)</label>
					<textarea name="description_en" rows={3} className="w-full p-2 rounded-md bg-shark border border-white/5" />
				</div>

				{/* Buttons are handled by Modal footer via modalForm */}
			</form>
		</Modal>
	)
}
