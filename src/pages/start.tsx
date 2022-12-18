import Image from 'next/image'
import React from 'react'
import logo from 'public/images/logo.svg'

const start = () => {
	return (
		<div className="w-11/12 m-auto h-screen flex flex-col">
			<div>
				<div className="navbar bg-base-100">
					<a className=" normal-case text-xl">NounsBuilderUI</a>
					<div className="h-12 w-12 my-auto  translate-y-0.5">
						<Image src={logo} />
					</div>
				</div>
			</div>
			<div className="card outline bg-black w-96 text-primary-content m-auto mt-24">
				<div className="card-body">
					<h2 className="card-title">Paste Address</h2>
					<p>Please paste the address of your DAO (NFT contract)</p>
					<input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs mt-4" />
					<a href="/theme" className="ml-auto mt-3">
						<svg
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
						</svg>
					</a>
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
	)
}

export default start
