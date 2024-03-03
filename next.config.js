/** @type {import('next').NextConfig} */
const nextConfig = {
	publicRuntimeConfig: {
		AppName: 'adhemukhlis'
	},
	eslint: {
		dirs: ['.']
	},
	basePath: '',
	poweredByHeader: false,
	trailingSlash: false,
	// transpilePackages: ['antd'],
	reactStrictMode: false
}

module.exports = nextConfig
