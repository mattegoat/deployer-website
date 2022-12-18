import Image from 'next/image'
import React from 'react'
import logo from 'public/images/logo.svg'

const theme = () => {
	return (
		<div className="w-11/12 m-auto h-screen justify-between flex flex-col">
			<div>
				<div className="navbar bg-base-100">
					<a className=" normal-case text-xl">NounsBuilderUI</a>
					<div className="h-12 w-12 my-auto  translate-y-0.5">
						<Image src={logo} />
					</div>
				</div>
			</div>
		</div>
	)
}

export default theme
