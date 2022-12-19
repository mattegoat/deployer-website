import Header from '@/components/header'
import { ConfigType, useConfigStore } from '@/store'
import { NextPage } from 'next'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { useSession } from 'next-auth/react'

const useHasHydrated = () => {
	const [hasHydrated, setHasHydrated] = useState<boolean>(false)

	useEffect(() => {
		setHasHydrated(true)
	}, [])

	return hasHydrated
}

const Wrapup: NextPage = () => {
	const config = useConfigStore(state => state.config)

	const { data } = useSession()

	const hasHydrated = useHasHydrated()

	const deployedRepo = useConfigStore(state => state.deployedRepo)
	const updateDeployedInfo = useConfigStore(state => state.updateDeployedInfo)
	const resetDeployedInfo = useConfigStore(state => state.resetDeployedInfo)

	const [creating, setCreating] = useState(false)

	const createRepo = async () => {
		try {
			setCreating(true)
			const response = await (await fetch(`/api/create`, { method: 'POST', body: '' })).json()
			console.log(response)
			const repoUrl = response.data.html_url
			updateDeployedInfo({ url: repoUrl })
			setCreating(false)
		} catch (err: any) {
			console.error(err)
			setCreating(false)
		}
	}

	const reset = () => {
		resetDeployedInfo()
	}

	if (!hasHydrated) {
		return <div>Loading...</div>
	}

	return (
		<div className="h-full" data-theme="black">
			<div className="w-11/12 m-auto h-screen flex flex-col">
				<Header />
				<h1 className=" pt-10 text-bold text-3xl pb-4 text-center">Wrap up</h1>

				<h1 className="text-left pt-10 text-bold text-3xl">DAO Address</h1>
				<a
					className="text-bold text-xl text-primary pt-4"
					href={`https://etherscan.com/address/${config.address}`}
				>
					{config.address}
				</a>
				<h1 className="text-left pt-10 text-bold text-3xl pb-4">DAO logo</h1>
				<div className="h-24 w-24">
					<img src={config.logo} alt="logo" />
				</div>
				<h1 className="text-left pt-10 text-bold text-3xl">Chosen theme</h1>
				<a className="text-bold text-xl text-primary pt-4">{config.theme}</a>
				<h1 className="text-left pt-10 text-bold text-3xl">Social links</h1>
				<a className="text-bold text-xl text-primary pt-4" href={config.twitter}>
					{config.twitter}
				</a>
				<a className="text-bold text-xl text-primary pt-4" href={config.discord}>
					{config.discord}
				</a>
				{deployedRepo ? (
					<div className="flex">
						<a
							className="btn w-fit mt-4 mx-auto mb-10"
							href={deployedRepo.url}
							target="_blank"
							rel="noreferrer"
						>
							Go to my repo
						</a>
						<button className="btn w-fit mt-4 mx-auto mb-10" onClick={reset}>
							Reset
						</button>
					</div>
				) : (
					<button className="btn w-fit mt-4 mx-auto mb-10" onClick={createRepo}>
						{creating ? 'Creating..' : 'Create Repository'}
					</button>
				)}
			</div>
		</div>
	)
}
export default Wrapup
