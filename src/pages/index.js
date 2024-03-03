// import PdfViewer from '@/components/PdfViewer'
import ReactPdfViewer from '@/components/ReactPdfViewer'

const Home = () => {
	return (
		<div style={{ flex: 1, display: 'flex' }}>
			{/* <PdfViewer /> */}
			<ReactPdfViewer />
		</div>
	)
}

export default Home
