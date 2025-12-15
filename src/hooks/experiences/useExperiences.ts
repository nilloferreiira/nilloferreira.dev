import { Experience } from "@/types/experience/experience"
import { useQuery } from "@tanstack/react-query"

async function fetchExperiences(): Promise<Experience[]> {
	const res = await fetch("/api/experiences")
	if (!res.ok) throw new Error("Erro ao buscar experiências")
	const json = await res.json()
	return json.data as Experience[]
}

export function useExperiences() {
	return useQuery<Experience[]>({
		queryKey: ["experiences"],
		queryFn: fetchExperiences,
		staleTime: 1000 * 60 * 5 // 5 minutes
	})
}
