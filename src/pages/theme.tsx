import Image from 'next/image'
import React, { useState } from 'react'
import logo from 'public/images/logo.svg'
import { Palette } from '@/components/Palette'
import { NextPage } from 'next'
import nouns from '/public/images/purple.png'

const themes = [
	'light',
	'dark',
	'corporate',
	'halloween',
	'pastel',
	'dracula',
	'lemonade',
	'synthwave',
	'garden',
	'fantasy',
	'cmyk',
	'night',
	'cupcake',
	'retro',
	'forest',
	'wireframe',
	'autumn',
	'coffee',
	'bumblebee',
	'cyberpunk',
	'aqua',
	'black',
	'business',
	'winter',
	'emerald',
	'valentine',
	'lofi',
	'luxury',
	'acid',
]

const Theme: NextPage = () => {
	const currentTheme = 'light'
	const [selectedTheme, setSelectedTheme] = useState(themes[0])

	return (
		<div className="w-11/12 m-auto justify-between flex flex-col">
			<div>
				<div className="navbar bg-base-100">
					<a className=" normal-case text-xl">NounsBuilderUI</a>
					<div className="h-12 w-12 my-auto  translate-y-0.5">
						<Image src={logo} alt="logo" />
					</div>
				</div>
			</div>
			<h1 className="text-center pt-10 text-bold text-3xl">Pick theme</h1>
			<div className="flex flex-col md:flex-row gap-4 mt-5 ">
				<div className="mockup-window border bg-base-300 w-full p-5 ">
					<div className="flex flex-wrap mt-4 gap-4 justify-center">
						{themes.map((th, index) => (
							<button
								className="rounded-md overflow-hidden"
								onClick={() => setSelectedTheme(th)}
								key={index}
							>
								<Palette theme={th} />
							</button>
						))}
					</div>
				</div>
				<div className="mockup-window border bg-base-300 w-full">
					<div className="w-full h-full" data-theme={selectedTheme}>
						<nav className="flex items-center justify-between flex-wrap p-3 w-full">
							<div
								className="flex items-center flex-shrink-0 text-white mr-6 w-16 h-16"
								style={{ cursor: 'pointer' }}
							>
								<Image src={logo} alt="logo" />
							</div>
							<div
								className={`w-full block flex-grow lg:flex lg:items-center lg:w-auto ml-auto justify-end`}
							>
								<div className="grid gap-3 grid-cols-1 sm:grid-cols-2">
									<a>
										<button className="btn btn-outline btn-secondary">Treasury Ξ 10</button>
									</a>
									<button className="btn btn-primary">Connect</button>
								</div>
							</div>
						</nav>
						<div className="overflow-hidden w-7/12 card mx-auto">
							<Image src={nouns} />
						</div>
					</div>
				</div>
			</div>
			<button className="btn mt-5 mb-10">Next</button>
		</div>
	)
}

export default Theme
