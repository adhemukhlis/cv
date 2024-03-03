import getConfig from 'next/config'
import { Head, Html, Main, NextScript } from 'next/document'
const { publicRuntimeConfig } = getConfig()

const MyDocument = () => {
	return (
		<Html lang={'en'}>
			<Head>
				<title>{publicRuntimeConfig.AppName}</title>
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	)
}

export default MyDocument
