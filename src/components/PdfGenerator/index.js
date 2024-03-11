import PdfPrinter from 'pdfmake'
import { Roboto } from './fonts'
import templateDocument from './TemplateDocuments/templateDocument'

export const createPdf = async ({
	photo_profile,
	full_name,
	position,
	city,
	province,
	country,
	summary,
	contact,
	skills,
	technical_skills,
	certifications,
	educations
}) => {
	const printer = new PdfPrinter({ Roboto })
	const pdfDoc = printer.createPdfKitDocument(
		templateDocument({
			photo_profile,
			full_name,
			position,
			city,
			province,
			country,
			summary,
			contact,
			skills,
			technical_skills,
			certifications,
			educations
		})
	)
	return new Promise((resolve, reject) => {
		try {
			const chunks = []
			pdfDoc.on('data', (chunk) => chunks.push(chunk))
			pdfDoc.on('end', () => resolve(Buffer.concat(chunks)))
			pdfDoc.end()
		} catch (err) {
			reject(err)
		}
	})
}

export const errorPdfHtmlTemplate = (error) => `
<h2>There was an error displaying the PDF document.</h2>
Error message: ${error}`
