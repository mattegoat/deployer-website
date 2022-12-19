import { NextPage } from 'next'
import Image from 'next/image'
import logo from 'public/images/logo.svg'
import React from 'react'

const Wrapup = () => {
	return (
		<div className="w-11/12 m-auto h-screen flex flex-col">
			<div>
				<div className="navbar bg-base-100">
					<a href="/" className=" normal-case text-xl">
						NounsBuilderUI
					</a>
					<div className="h-12 w-12 my-auto  translate-y-0.5">
						<Image src={logo} />
					</div>
				</div>
			</div>
			<h1 className=" pt-10 text-bold text-3xl pb-4 text-center">Wrap up</h1>

			<h1 className="text-left pt-10 text-bold text-3xl">DAO Address</h1>
			<a className="text-bold text-xl text-primary pt-4" href="https://etherscan.com">
				0xtest04UAknsqàçu'fvs
			</a>
			<h1 className="text-left pt-10 text-bold text-3xl">DAO logo</h1>
			<div className="h-24 w-24">
				<Image src={logo} />
			</div>
			<h1 className="text-left pt-10 text-bold text-3xl">Chosen theme</h1>
			<a className="text-bold text-xl text-primary pt-4" href="https://etherscan.com">
				light
			</a>
			<h1 className="text-left pt-10 text-bold text-3xl">Social links</h1>
			<a className="text-bold text-xl text-primary pt-4" href="https://etherscan.com">
				Twitter
			</a>
			<a className="text-bold text-xl text-primary pt-4" href="https://etherscan.com">
				Discord
			</a>
		</div>
	)
}
export default Wrapup
