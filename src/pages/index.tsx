import { FC } from 'react'
import { APP_NAME } from '@/lib/consts'
import ConnectWallet from '@/components/ConnectWallet'
import { BookOpenIcon, CodeIcon, ShareIcon } from '@heroicons/react/outline'
import ThemeSwitcher from '@/components/ThemeSwitcher'
import Header from '@/components/header'
import bg from 'public/images/bg.png'
import Image from 'next/image'
import { signIn, useSession } from 'next-auth/react'
import Link from 'next/link'

const Home: FC = () => {
	const { data, status } = useSession()

	return (
		<div>
			<div className="w-11/12 m-auto">
				<Header />
				<div className="hero min-h-screen ">
					<div className="hero-content text-center relative">
						<div className="max-w-xl">
							<h1 className="text-5xl font-bold">Deploy custom websites for your DAOs in a click</h1>
							{status === 'authenticated' ? (
								<Link href="/theme">
									<button className="start-button btn btn-outline mt-7 w-40">Start Now</button>
								</Link>
							) : (
								<button
									onClick={() => signIn('github')}
									className="start-button btn btn-outline mt-7 w-40"
								>
									Connect your Github to begin
								</button>
							)}
						</div>
						<div
							className="absolute left-0 bottom-0 -z-10"
							style={{ transform: 'translate(-408px, 558px)' }}
						>
							<Image src={bg} alt="bg" />
						</div>
					</div>
				</div>
				<div className="flex flex-col md:flex-row gap-4 p-4 w-full">
					<div className="card outline bg-black w-full text-primary-content">
						<div className="card-body">
							<h2 className="card-title">1</h2>
							<p>Paste your DAO address</p>
						</div>
					</div>
					<div className="card outline bg-black w-full  text-primary-content">
						<div className="card-body">
							<h2 className="card-title">2</h2>
							<p>Connect your GitHub account</p>
						</div>
					</div>
					<div className="card w-full  outline bg-black text-primary-content">
						<div className="card-body">
							<h2 className="card-title">3</h2>
							<p>Customize the styling and content</p>
						</div>
					</div>
					<div className="card w-full  outline bg-black text-primary-content">
						<div className="card-body">
							<h2 className="card-title">4</h2>
							<p>Deploy your website</p>
						</div>
					</div>
				</div>
			</div>
			<div className="w-full mt-24 z-10 outline "></div>
			<footer className="footer footer-center p-4 bg-base-100 text-base-content">
				<div>
					<p>
						by <a href="https://twitter.com/0xevolve">0xevolve</a> and{' '}
						<a href="https://twitter.com/0xmattegoat">mattegoat</a>
					</p>
				</div>
			</footer>
		</div>
	)
}

export default Home
