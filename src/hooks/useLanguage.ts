import { useContext } from "react"
import { languageContext } from "@/context/language-context"

export function useLanguage() {
	return useContext(languageContext)
}
