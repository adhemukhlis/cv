const { default: axios } = require('axios')

const imageUrlToBase64 = async (url) => {
	const response = await axios.get(url, { responseType: 'arraybuffer' })
	const base64 = Buffer.from(response.data, 'binary').toString('base64')
	return base64
}

export default imageUrlToBase64
