import { getProjects } from "@/actions/projects/get-projects"
import type { Project } from "@/types/project/project"
import { useQuery } from "@tanstack/react-query"

export function useProjects() {
	return useQuery<Project[]>({
		queryKey: ["projects"],
		queryFn: getProjects,
		staleTime: 1000 * 60 * 5 // 5 minutes
	})
}
