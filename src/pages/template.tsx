import Header from '@/components/header'
import { NextPage } from 'next'
import test from '/public/images/test.png'
import Image from 'next/image'
import Link from 'next/link'

const Theme: NextPage = () => {
	return (
		<div className="h-full" data-theme="black">
			<div className="w-11/12 m-auto justify-between flex flex-col">
				<Header />
				<h1 className="text-center pt-10 text-bold text-3xl pb-5">Pick template</h1>
				<div className="flex flex-col md:flex-row gap-4">
					<div className="mockup-window border bg-base-300 w-full">
						<Image src={test} />
					</div>
					<div className="mockup-window bg-base-300 w-full">
						<div className="flex justify-center bg-base-200 h-full items-center">Soon Available</div>
					</div>
				</div>
				<Link href={'/theme'}>
					<div className="btn mt-5">Next</div>
				</Link>
			</div>
		</div>
	)
}
export default Theme
