import Image from 'next/image'
import React, { useState } from 'react'
import logo from 'public/images/logo.svg'
import { Palette } from '@/components/Palette'
import { NextPage } from 'next'
import nouns from '/public/images/purple.png'
import Link from 'next/link'
import Header from '@/components/header'

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
			<Header />
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
							<Image src={nouns} alt="purpleDAO" />
						</div>
						<div className="flex flex-row gap-4 m-auto pt-4 w-fit">
							<div className="btn btn-outline btn-accent btn-square false">
								<svg
									width="24"
									height="24"
									xmlns="http://www.w3.org/2000/svg"
									fillRule="evenodd"
									clipRule="evenodd"
									style={{ transform: 'rotate(180deg)' }}
								>
									<path
										fill="hsl(var(--p))"
										d="M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z"
									/>
								</svg>
							</div>
							<div className="btn btn-outline btn-accent btn-square false">
								<svg
									width="24"
									height="24"
									xmlns="http://www.w3.org/2000/svg"
									fillRule="evenodd"
									clipRule="evenodd"
								>
									<path
										fill="hsl(var(--p))"
										d="M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z"
									/>
								</svg>
							</div>
						</div>
						<h1 className="text-lg sm:text-2xl md:text-3xl lg:text-3xl xl:text-4xl font-bold text-center pt-4">
							Purple DAO #39
						</h1>
						<div className="flex flex-col gap-4 justify-center w-full">
							<div className="flex flex-row gap-2 sm:gap-4 md:gap-10 m-auto pt-4">
								<div className="flex flex-col gap-1">
									<span className="text-md font-semibold text-secondary">Current Bid</span>
									<div className="text-lg md:text-xl lg:text-3xl xl:text-4xl font-bold">2 Ξ </div>
								</div>
								<div className="divider divider-horizontal color-primary" />
								<div className="flex flex-col gap-1">
									<div className="text-md font-semibold text-secondary">Auction ends in</div>
									<div className="text-lg md:text-xl lg:text-3xl xl:text-4xl font-bold">
										{' '}
										2h 3mn 10s
									</div>
								</div>
							</div>
							<div className="form-contro pt-4 m-auto">
								<div className="input-group">
									<input
										type="text"
										pattern="[0-9.]*"
										placeholder={`2.3 Ξ or more`}
										className="input input-bordered font-bold w-full lg:w-7/12"
									/>
									<button className="btn btn-square px-2 bg-primary">Bid</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<Link href="/wrapup" className="w-full">
				<button className="btn mt-5 mb-10 w-full">Next</button>
			</Link>
		</div>
	)
}

export default Theme
