import Image from 'next/image'
import React from 'react'
import logo from 'public/images/logo.svg'

const Header = () => {
	return (
		<div>
			<div className="navbar bg-base-100">
				<a className=" normal-case text-xl">NounsBuilderUI</a>
				<div className="h-12 w-12 my-auto  translate-y-0.5">
					<Image src={logo} />
				</div>
				<button className="btn btn-outline w-40 ml-auto mt-1">Start now</button>
			</div>
		</div>
	)
}

export default Header
