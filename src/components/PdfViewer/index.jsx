import axios from 'axios'
import { useEffect, useRef } from 'react'

// use base64
// axios
// 	.request({
// 		method: 'GET',
// 		url: '/api/get-cv',
// 		responseType: 'arraybuffer'
// 	})
// 	.then(async (res) => {
// 		if (res.status === 200) {
// 			const filename = `test.pdf`
// 			const base64 = Buffer.from(res.data, 'binary').toString('base64')
// 			iframeRef.current.src =
// 				'data:application/pdf;headers=filename%3D' + filename + ';base64,' + base64 + '#toolbar=0&navpanes=0&scrollbar=0'
// 		}
// 	})

export default function PdfViewer() {
	const iframeRef = useRef()
	useEffect(() => {
		axios
			.request({
				method: 'GET',
				url: '/api/get-cv',
				responseType: 'blob'
			})
			.then(async (res) => {
				if (res.status === 200) {
					const blob = new Blob([res.data], { type: 'application/pdf;charset=UTF-8' })
					const url = URL.createObjectURL(blob)
					iframeRef.current.src = url
				}
			})
	}, [])
	return (
		<div style={{ flex: 1 }}>
			<iframe ref={iframeRef} width="100%" height="99%" style={{ margin: 0 }} frameBorder={0} />
		</div>
	)
}
