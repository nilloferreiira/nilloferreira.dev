import { getExperiences } from "@/actions/experiences/get-experience"
import { Experience } from "@/types/experience/experience"
import { useQuery } from "@tanstack/react-query"

export function useExperiences() {
	return useQuery<Experience[]>({
		queryKey: ["experiences"],
		queryFn: getExperiences,
		staleTime: 1000 * 60 * 5 // 5 minutes
	})
}
