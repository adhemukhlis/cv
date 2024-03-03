import { Nunito } from 'next/font/google'
import React from 'react'

import '@/styles/globals.css'

const nunito = Nunito({
	style: ['normal', 'italic'],
	subsets: ['latin'],
	display: 'swap'
})

if (!process.browser) React.useLayoutEffect = React.useEffect

const MyApp = ({ Component, pageProps }) => {
	return (
		<main className={nunito.className}>
			<div
				style={{
					display: 'flex',
					minHeight: '100vh'
				}}>
				<Component {...pageProps} />
			</div>
		</main>
	)
}

export default MyApp
