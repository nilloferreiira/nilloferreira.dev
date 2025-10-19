"use client"

import { createContext, useState } from "react"

interface LanguageContextProps {
	language: "en" | "pt-BR"
	changeLanguage?: (lang: "en" | "pt-BR") => void
	children?: React.ReactNode
}

export const languageContext = createContext<LanguageContextProps>({ language: "pt-BR", changeLanguage: () => {} })

export function LanguageProvider({ children }: LanguageContextProps) {
	const [language, setLanguage] = useState<"en" | "pt-BR">("pt-BR")

	function changeLanguage(lang: "en" | "pt-BR") {
		setLanguage(lang)
	}

	return <languageContext.Provider value={{ language, changeLanguage }}>{children}</languageContext.Provider>
}
