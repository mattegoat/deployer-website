// This is an example of to protect an API route
import { unstable_getServerSession } from 'next-auth/next'
import { authOptions } from '@/pages/api/auth/[...nextauth]'
import { Octokit, App } from 'octokit'
import type { NextApiRequest, NextApiResponse } from 'next'
import { getToken } from 'next-auth/jwt'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
	const session = await unstable_getServerSession(req, res, authOptions)
	const token = await getToken({ req })

	if (session) {
		const octokit = new Octokit({
			auth: token.accessToken,
		})

		try {
			const data = await octokit.request('POST /repos/{template_owner}/{template_repo}/generate', {
				template_owner: 'mattegoat',
				template_repo: 'no-code-builder-dao',
				name: 'no-code-nounish-repo',
				description: 'Your own custom website for your Nounish DAO',
				include_all_branches: false,
				private: false,
			})
			console.log(data.data)
			return res.json({
				data: data.data,
			})
		} catch (err: any) {
			console.error(err)
			return res.json({ error: err })
		}
	}

	res.json({
		error: 'You must be signed in to deploy the repo.',
	})
}
