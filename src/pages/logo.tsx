import Image from 'next/image'
import React, { useState } from 'react'
import logo from 'public/images/logo.svg'
import Header from '@/components/header'
import Link from 'next/link'
import { NextPage } from 'next'
import { useConfigStore } from '@/store'
import { useRouter } from 'next/router'

const Start: NextPage = () => {
	const config = useConfigStore(state => state.config)
	const router = useRouter()
	const updateConfig = useConfigStore(state => state.updateConfig)

	const handleSubmit = (e: React.SyntheticEvent) => {
		e.preventDefault()
		const target = e.target as typeof e.target & {
			twitter: { value: string }
			discord: { value: string }
			logo: { value: string }
		}
		const twitter = target.twitter.value // typechecks!
		const discord = target.discord.value // typechecks!
		const logo = target.logo.value // typechecks!
		// TODO: Check links are valid

		// Update State
		updateConfig({ twitter, discord, logo })

		// Go to Next step
		router.push('/wrapup')
	}

	return (
		<div className="h-full" data-theme="black">
			<div className="w-11/12 m-auto h-screen flex flex-col">
				<Header />
				<div className="card outline bg-black w-96 text-primary-content m-auto mt-24">
					<form onSubmit={handleSubmit}>
						<div className="card-body">
							<h2 className="card-title">Paste Logo & socials</h2>
							<p>Please paste a link to your logo and socials</p>
							<input
								type="text"
								name="logo"
								defaultValue={config.logo}
								placeholder="Image"
								className="input input-bordered w-full max-w-xs mt-4"
							/>
							<input
								type="text"
								name="twitter"
								defaultValue={config.twitter}
								placeholder="Twitter"
								className="input input-bordered w-full max-w-xs mt-4"
							/>
							<input
								type="text"
								name="discord"
								defaultValue={config.discord}
								placeholder="Discord"
								className="input input-bordered w-full max-w-xs mt-4"
							/>
							<input type="submit" className="ml-auto mt-3 btn" value="Submit" />
						</div>
					</form>
				</div>
				<footer className="footer footer-center p-4 bg-base-100 text-base-content mt-auto outline-none">
					<div>
						<p>
							by <a href="https://twitter.com/0xevolve">0xevolve</a> and{' '}
							<a href="https://twitter.com/0xmattegoat">mattegoat</a>
						</p>
					</div>
				</footer>
			</div>
		</div>
	)
}

export default Start
