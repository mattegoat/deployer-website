import Header from '@/components/header'
import { ConfigType, useConfigStore } from '@/store'
import { NextPage } from 'next'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'

const useHasHydrated = () => {
	const [hasHydrated, setHasHydrated] = useState<boolean>(false)

	useEffect(() => {
		setHasHydrated(true)
	}, [])

	return hasHydrated
}

const Wrapup: NextPage = () => {
	const config = useConfigStore(state => state.config)
	const hasHydrated = useHasHydrated()

	if (!hasHydrated) {
		return <div>Loading...</div>
	}

	return (
		<div className="w-11/12 m-auto h-screen flex flex-col">
			<Header />
			<h1 className=" pt-10 text-bold text-3xl pb-4 text-center">Wrap up</h1>

			<h1 className="text-left pt-10 text-bold text-3xl">DAO Address</h1>
			<a className="text-bold text-xl text-primary pt-4" href="https://etherscan.com">
				{config.address}
			</a>
			<h1 className="text-left pt-10 text-bold text-3xl pb-4">DAO logo</h1>
			<div className="h-24 w-24">
				<img src={config.logo} alt="logo" />
			</div>
			<h1 className="text-left pt-10 text-bold text-3xl">Chosen theme</h1>
			<a className="text-bold text-xl text-primary pt-4" href="https://etherscan.com">
				{config.theme}
			</a>
			<h1 className="text-left pt-10 text-bold text-3xl">Social links</h1>
			<a className="text-bold text-xl text-primary pt-4" href="https://etherscan.com">
				{config.twitter}
			</a>
			<a className="text-bold text-xl text-primary pt-4" href="https://etherscan.com">
				{config.discord}
			</a>
			<button className="btn w-fit mt-4 mx-auto mb-10">Create Repository</button>
		</div>
	)
}
export default Wrapup
