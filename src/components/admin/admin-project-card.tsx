import { Project } from "@/types/project/project"

interface AdminProjectCardProps {
	project: Project
	onEdit: (project: Project) => void
	onDelete: (id: number) => void
}

export function AdminProjectCard({ project, onEdit, onDelete }: AdminProjectCardProps) {
	return (
		<div className="flex items-center justify-between bg-[var(--color-bg)] p-6 rounded-2xl shadow-lg ring-1 ring-white/5">
			<div>
				<div className="font-medium text-white text-lg">{project.title ?? project.title}</div>
				<div className="text-sm text-[var(--color-text-secondary)] mt-1">
					{project.description_pt ?? project.description_en}
				</div>
			</div>
			<div className="flex gap-3 items-center">
				<button
					onClick={() => onEdit(project)}
					className="px-3 py-2 bg-primary/80 text-white rounded-xl hover:brightness-95 transition"
				>
					Edit
				</button>
				<button
					onClick={() => onDelete(project.id)}
					className="px-3 py-2 bg-red-600 text-white rounded-xl hover:brightness-95 transition"
				>
					Delete
				</button>
			</div>
		</div>
	)
}
