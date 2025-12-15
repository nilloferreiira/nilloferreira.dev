import type { Project } from "@/types/project/project"
import { useQuery } from "@tanstack/react-query"

async function fetchProjects(): Promise<Project[]> {
	const res = await fetch("/api/projects")
	if (!res.ok) throw new Error("Erro ao buscar projetos")
	const json = await res.json()
	return json.data as Project[]
}

export function useProjects() {
	return useQuery<Project[]>({
		queryKey: ["projects"],
		queryFn: fetchProjects,
		staleTime: 1000 * 60 * 5 // 5 minutes
	})
}
