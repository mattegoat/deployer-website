import NextAuth, { AuthOptions } from 'next-auth'
import GithubProvider from 'next-auth/providers/github'

export const authOptions: AuthOptions = {
	secret: process.env.NEXTAUTH_SECRET,
	providers: [
		GithubProvider({
			clientId: process.env.GITHUB_ID,
			clientSecret: process.env.GITHUB_SECRET,
		}),
	],
}

export default NextAuth(authOptions)
