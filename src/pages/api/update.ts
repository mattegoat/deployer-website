// This is an example of to protect an API route
import { unstable_getServerSession } from 'next-auth/next'
import { authOptions } from '@/pages/api/auth/[...nextauth]'
import { Octokit, App } from 'octokit'
import type { NextApiRequest, NextApiResponse } from 'next'
import { getToken } from 'next-auth/jwt'
import { ConfigType } from '@/store'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
	const session = await unstable_getServerSession(req, res, authOptions)
	const token = await getToken({ req })
	const { owner, repo, config }: { owner: string; repo: string; config: ConfigType } = req.body

	if (session) {
		const client = new Octokit({
			auth: token.accessToken,
		})

		try {
			console.log(owner, repo, config)
			const commits = await client.rest.repos.listCommits({
				owner,
				repo,
			})
			console.log(commits)
			const commitSHA = commits.data[0].sha
			const files = [
				{
					name: 'config/config.json',
					contents: JSON.stringify(config),
				},
			]

			const commitableFiles: any[] = files.map(({ name, contents }) => {
				return {
					path: name,
					mode: '100644',
					type: 'commit',
					content: contents,
				}
			})

			const {
				data: { sha: currentTreeSHA },
			} = await client.rest.git.createTree({
				owner,
				repo,
				tree: commitableFiles,
				base_tree: commitSHA,
				message: 'NounishBuilder -> update config 🚀',
				parents: [commitSHA],
			})

			const {
				data: { sha: newCommitSHA },
			} = await client.rest.git.createCommit({
				owner,
				repo,
				tree: currentTreeSHA,
				message: `NounishBuilder::update config 🚀`,
				parents: [commitSHA],
			})

			await client.rest.git.updateRef({
				owner,
				repo,
				sha: newCommitSHA,
				ref: 'heads/main', // Whatever branch you want to push to
			})

			return res.json({
				data: '',
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
