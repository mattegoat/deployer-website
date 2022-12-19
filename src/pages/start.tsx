import Image from 'next/image'
import React, { useState } from 'react'
import logo from 'public/images/logo.svg'
import Header from '@/components/header'
import Link from 'next/link'
import { NextPage } from 'next'
import { useConfigStore } from '@/store'
import { useRouter } from 'next/router'

const Start: NextPage = () => {
	const configStore = useConfigStore()
	const router = useRouter()

	const handleSubmit = (e: React.SyntheticEvent) => {
		e.preventDefault()
		const target = e.target as typeof e.target & {
			address: { value: string }
		}
		const address = target.address.value // typechecks!
		// TODO: Check address is valid

		// Update State
		configStore.updateConfig({ address })

		// Go to Next step
		router.push('/theme')
	}

	return (
		<div className="h-full" data-theme="black">
			<div className="w-11/12 m-auto h-screen flex flex-col" data-theme="black">
				<Header />
				<div className="card outline bg-black w-96 text-primary-content m-auto mt-24">
					<div className="card-body">
						<h2 className="card-title">Paste Address</h2>
						<p>Please paste the address of your DAO (NFT contract)</p>
						<form onSubmit={handleSubmit} className="flex flex-col justify-end">
							<input
								type="text"
								defaultValue={configStore.config.address}
								name="address"
								placeholder="Type here"
								className="input input-bordered w-full max-w-xs mt-4"
							/>
							<input type="submit" className="ml-auto mt-3 btn" value="GO" />
							{/* <svg
								width="24"
								height="24"
								xmlns="http://www.w3.org/2000/svg"
								fillRule="evenodd"
								clipRule="evenodd"
							>
								<path
									fill="white"
									d="M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z"
								/>
							</svg> */}
						</form>
					</div>
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
