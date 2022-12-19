import { ethers } from 'ethers'
import { config } from 'process'
import create from 'zustand'
import { persist } from 'zustand/middleware'

export type ConfigType = {
	address?: string
	theme?: string
	twitter?: string
	discord?: string
	logo?: string
}

interface ConfigState {
	config: ConfigType
	updateConfig: ({ address, theme, twitter, discord, logo }: ConfigType) => any
}

export const useConfigStore = create<ConfigState>()(
	persist(
		(set, get) => ({
			config: {
				address: ethers.constants.AddressZero,
				theme: 'light',
				twitter: 'https://twitter.com',
				discord: 'https://discord.com',
				logo: 'https://uploads-ssl.webflow.com/6197b886eba53d0f109a168e/619821f289143ff6cd39a7fc_Frame%2030.png',
			},
			updateConfig: (c: ConfigType) => set(state => ({ ...state, config: { ...state.config, ...c } })),
		}),
		{
			name: 'config-storage', // name of item in the storage (must be unique)
			// getStorage: () => ({
			// 	getItem: async name => sessionStorage.getItem(name),
			// 	setItem: (name, value) => sessionStorage.setItem(name, value),
			// 	removeItem: name => sessionStorage.removeItem(name),
			// }),
		}
	)
)
