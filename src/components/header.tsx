import Image from 'next/image'
import React from 'react'
import logo from 'public/images/logo.svg'
import { signIn, signOut, useSession } from 'next-auth/react'
import Link from 'next/link'

const Header = () => {
	const { data, status } = useSession()

	return (
		<div>
			<div className="navbar bg-base-100">
				<Link href="/" className=" normal-case text-xl">
					NounsBuilderUI
				</Link>
				<div className="h-12 w-12 my-auto  translate-y-0.5">
					<Image src={logo} alt="logo" />
				</div>
				{status === 'authenticated' ? (
					<div className="btn btn-outline md:w-40 ml-auto mt-1" onClick={() => signOut()}>
						Connected as {data?.user.name}
					</div>
				) : (
					<div className="btn btn-outline md:w-40 ml-auto mt-1" onClick={() => signIn('github')}>
						Connect
					</div>
				)}
			</div>
		</div>
	)
}

export default Header
