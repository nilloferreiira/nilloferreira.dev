interface ExperienceProps {
	language: "en" | "pt-BR"
	title_en: string
	title_pt: string
	description_en: string
	description_pt: string
}

export function Experience({ language, title_en, title_pt, description_en, description_pt }: ExperienceProps) {
	function formatText(text: string) {
		return text.split("\n").map((line, idx, arr) => (
			<span key={idx}>
				{line}
				{idx < arr.length - 1 && <br />}
			</span>
		))
	}

	return (
		<div className="w-full text-center lg:text-left lg:w-[588px] space-y-5 lg:space-y-10 ">
			<h2 className="text-zinc-100 font-bold text-3xl lg:text-4xl">{language == "en" ? title_en : title_pt}</h2>
			<p className="text-text-secondary text-2xl">{formatText(language == "en" ? description_en : description_pt)}</p>
		</div>
	)
}
