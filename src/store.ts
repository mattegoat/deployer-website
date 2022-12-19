import { ethers } from 'ethers'
import create from 'zustand'
import { persist } from 'zustand/middleware'

interface ConfigState {
	address: string
	theme: string
	twitter: string
	discord: string
	logo: string
}

export const useConfigStore = create<ConfigState>()(
	persist(
		(set, get) => ({
			address: ethers.constants.AddressZero,
			theme: 'light',
			twitter: 'https://twitter.com',
			discord: 'https://discord.com',
			logo: 'https://uploads-ssl.webflow.com/6197b886eba53d0f109a168e/619821f289143ff6cd39a7fc_Frame%2030.png',
		}),
		{
			name: 'config-storage', // name of item in the storage (must be unique)
		}
	)
)
