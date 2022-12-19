import 'tailwindcss/tailwind.css'
import { ThemeProvider } from 'next-themes'
import Web3Provider from '@/components/Web3Provider'
import { SessionProvider } from 'next-auth/react'

const App = ({ Component, pageProps: { session, ...pageProps } }) => {
	return (
		<SessionProvider session={session} data-theme="black">
			<ThemeProvider attribute="class">
				<Web3Provider>
					<Component {...pageProps} />
				</Web3Provider>
			</ThemeProvider>
		</SessionProvider>
	)
}

export default App
