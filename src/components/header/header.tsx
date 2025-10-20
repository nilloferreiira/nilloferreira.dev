import Image from "next/image"
import { HeaderContent } from "./content"

export function Header() {
	return (
		<header className="w-full lg:w-4/5 lg:p-6 pt-10 flex flex-col lg:flex-row items-center justify-center lg:items-start lg:justify-start">
			<Image
				src="https://github.com/nilloferreiira.png"
				alt="foto de perfil"
				width={288}
				height={288}
				className="size-72 ring-1 rounded-full ring-zinc-200"
			/>

			<HeaderContent />
		</header>
	)
}
