"use client"

import { useLanguage } from "@/hooks/useLanguage"

export function SwitchLanguage() {
	const { language, changeLanguage } = useLanguage()

	function handleLanguageChange() {
		if (changeLanguage) {
			changeLanguage(language === "en" ? "pt-BR" : "en")
		}
	}

	return (
		<div>
			<div
				onClick={handleLanguageChange}
				className={`md:w-14 md:h-7 w-12 h-6 flex items-center ${
					language === "en" ? "bg-zinc-900" : "bg-gray-300"
				} rounded-full p-1 cursor-pointer`}
			>
				{/* switch options */}
				<div
					className={`
              ${language === "en" ? "bg-gray-300" : "bg-zinc-900"}
              md:w-6 md:h-6 w-5 h-5 rounded-full shadow-md transition duration-500 transform ${
								language === "en" ? "translate-x-6" : null
							}
              `}
				/>
			</div>
			<span className="text-text-secondary text-sm">BR - US</span>
		</div>
	)
}
