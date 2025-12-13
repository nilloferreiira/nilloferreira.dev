"use client"

import { updateExperience } from "@/actions/experiences/update-experience"
import { Modal } from "./modal"
import type { Experience } from "@/types/experience/experience"
import { queryClient } from "@/lib/react-query"
import { useMutation } from "@tanstack/react-query"

interface Props {
	isOpen: boolean
	onClose: () => void
	experience: Experience | null
}

export function EditExperienceModal({ isOpen, onClose, experience }: Props) {
	const { mutateAsync: updateExperienceMutation, isPending } = useMutation({
		mutationFn: updateExperience,
		onSuccess: (res) => {
			queryClient.setQueryData(["experiences"], (oldData: Experience[] | undefined) => {
				if (!oldData) return [res[0]]
				return oldData.map((item) => (item.id === res[0].id ? res[0] : item))
			})
			onClose()
		}
	})

	async function handleEditExperience(data: Experience) {
		await updateExperienceMutation(data)
	}

	if (!experience) return null

	return (
		<Modal
			isOpen={isOpen}
			onClose={onClose}
			title="Edit Experience"
			modalForm="edit-experience-form"
			saveLabel="Save"
			isPending={isPending}
		>
			<form
				id="edit-experience-form"
				className="bg-shark p-4 rounded-lg space-y-3"
				onSubmit={(e) => {
					e.preventDefault()
					const form = new FormData(e.currentTarget as HTMLFormElement)
					const data: Experience = {
						id: experience.id,
						title_pt: String(form.get("title_pt") ?? ""),
						title_en: String(form.get("title_en") ?? ""),
						description_pt: String(form.get("description_pt") ?? ""),
						description_en: String(form.get("description_en") ?? "")
					}
					handleEditExperience(data)
				}}
			>
				<div>
					<label className="block text-sm text-text-secondary mb-1">Title (PT)</label>
					<input
						name="title_pt"
						defaultValue={experience.title_pt}
						required
						className="w-full p-2 rounded-md bg-shark border border-white/5"
					/>
				</div>

				<div>
					<label className="block text-sm text-text-secondary mb-1">Title (EN)</label>
					<input
						name="title_en"
						defaultValue={experience.title_en}
						className="w-full p-2 rounded-md bg-shark border border-white/5"
					/>
				</div>

				<div>
					<label className="block text-sm text-text-secondary mb-1">Description (PT)</label>
					<textarea
						name="description_pt"
						defaultValue={experience.description_pt}
						rows={3}
						className="w-full p-2 rounded-md bg-shark border border-white/5"
					/>
				</div>

				<div>
					<label className="block text-sm text-text-secondary mb-1">Description (EN)</label>
					<textarea
						name="description_en"
						defaultValue={experience.description_en}
						rows={3}
						className="w-full p-2 rounded-md bg-shark border border-white/5"
					/>
				</div>

				{/* Buttons are handled by Modal footer via modalForm */}
			</form>
		</Modal>
	)
}
