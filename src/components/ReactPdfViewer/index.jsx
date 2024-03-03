import { Viewer, Worker } from '@react-pdf-viewer/core'
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout'
import { getFilePlugin } from '@react-pdf-viewer/get-file'
import axios from 'axios'
import { useEffect, useRef, useState } from 'react'
import '@react-pdf-viewer/core/lib/styles/index.css'
import '@react-pdf-viewer/default-layout/lib/styles/index.css'

const ReactPdfViewer = () => {
	const [loading, setLoading] = useState(false)
	const viewRef = useRef()
	const getFilePluginInstance = getFilePlugin({
		fileNameGenerator: () => {
			return viewRef.current.filename || 'document'
		}
	})
	const { DownloadButton } = getFilePluginInstance
	const renderToolbar = (Toolbar) => <Toolbar>{renderDefaultToolbar(transform)}</Toolbar>
	const defaultLayoutPluginInstance = defaultLayoutPlugin({
		renderToolbar,
		sidebarTabs: (defaultTabs) => [
			// Remove the attachments tab (\`defaultTabs[2]\`)
			defaultTabs[0], // Bookmarks tab
			defaultTabs[1] // Thumbnails tab
		]
	})
	const { renderDefaultToolbar } = defaultLayoutPluginInstance.toolbarPluginInstance
	const transform = (slot) => ({
		...slot,
		Open: () => <></>,
		Download: () => <DownloadButton />
	})

	useEffect(() => {
		setLoading(true)
		axios
			.request({
				method: 'GET',
				url: '/api/get-cv',
				responseType: 'arraybuffer'
			})
			.then(async (res) => {
				if (res.status === 200) {
					const filename = res.headers['content-disposition'].match(/filename="([^"]+)"/)[1]
					const base64 = Buffer.from(res.data, 'binary').toString('base64')
					const base64Url =
						'data:application/pdf;headers=filename%3D' + filename + ';base64,' + base64 + '#toolbar=0&navpanes=0&scrollbar=0'
					viewRef.current.src = base64Url
					viewRef.current.filename = filename
					setTimeout(() => setLoading(false), 1200)
				}
			})
	}, [])
	return (
		<Worker workerUrl="https://unpkg.com/pdfjs-dist@2.16.105/build/pdf.worker.js">
			<div
				ref={viewRef}
				style={{
					height: '100%',
					width: '100%',
					marginLeft: 'auto',
					marginRight: 'auto'
				}}>
				{!loading ? (
					<Viewer
						fileUrl={viewRef.current?.src}
						plugins={[defaultLayoutPluginInstance, getFilePluginInstance]}
						defaultScale={1.4}
					/>
				) : (
					<></>
				)}
			</div>
		</Worker>
	)
}

export default ReactPdfViewer
