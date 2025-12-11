import { Experience } from "@/types/experience/experience"

interface AdminExperienceCardProps {
	experience: Experience
	onEdit: (experience: Experience) => void
	onDelete: (id: string) => void
}

export function AdminExperienceCard({ experience, onEdit, onDelete }: AdminExperienceCardProps) {
	return (
		<div className="flex items-center justify-between bg-[var(--color-bg)] p-6 rounded-2xl shadow-lg ring-1 ring-white/5">
			<div>
				<div className="font-medium text-white text-lg">{experience.title_pt ?? experience.title_en}</div>
				<div className="text-sm text-[var(--color-text-secondary)] mt-1">
					{experience.description_pt ?? experience.description_en}
				</div>
			</div>
			<div className="flex gap-3 items-center">
				<button
					onClick={() => onEdit(experience)}
					className="px-3 py-2 bg-purple/80 text-white rounded-xl hover:brightness-95 transition"
				>
					Edit
				</button>
				<button
					onClick={() => onDelete(experience.id)}
					className="px-3 py-2 bg-red-600 text-white rounded-xl hover:brightness-95 transition"
				>
					Delete
				</button>
			</div>
		</div>
	)
}
