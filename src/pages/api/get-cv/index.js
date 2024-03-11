import fs from 'fs'
import path from 'path'
import { createPdf, errorPdfHtmlTemplate } from '@/components/PdfGenerator'
import { cv } from '@/content/cv'
const rootDirectory = path.join(process.cwd(), 'src')

const {
	profile_picture_filename,
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
} = cv
const photoPath = path.join(rootDirectory, 'assets', 'images', profile_picture_filename)
const api = async (req, res) => {
	const imageBuffer = fs.readFileSync(photoPath)
	switch (req.method) {
		case 'GET': {
			try {
				const base64_photo_profile = imageBuffer.toString('base64')
				const filename = `CV__MUKHLIS-ADHE-PURWANTO.pdf`
				const binaryResult = await createPdf({
					photo_profile: base64_photo_profile,
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
				res.setHeader('Content-Disposition', `attachment; filename="${filename}"`)
				res.setHeader('Content-Type', 'application/pdf')
				return res.send(binaryResult)
			} catch (error) {
				return res.send(errorPdfHtmlTemplate(error.message))
			}
		}

		default: {
			return res.status(405).send({ message: 'Method not allowed' })
		}
	}
}

export default api
