import dayjs from 'dayjs'
import emailIcon from '@/assets/Base64Icon/email'
import githubIcon from '@/assets/Base64Icon/github'
import linkedinIcon from '@/assets/Base64Icon/linkedin'
import locationIcon from '@/assets/Base64Icon/location'
import whatsappIcon from '@/assets/Base64Icon/whatsapp'
var duration = require('dayjs/plugin/duration')
var relativeTime = require('dayjs/plugin/relativeTime')

dayjs.extend(duration)
dayjs.extend(relativeTime)

const gapSize = 16
const getHumanizeTime = (from_date_iso_string, to_date_iso_string) => {
	const toDate = !!to_date_iso_string ? dayjs(to_date_iso_string) : dayjs()
	return dayjs.duration(dayjs(from_date_iso_string).diff(toDate, 'months'), 'months').humanize()
}
const divider = [
	{
		margin: [0, gapSize, 0, 0],
		table: {
			headerRows: 1,
			widths: [40],
			body: [[''], ['']]
		},
		layout: 'headerLineOnly'
	}
]
const templateDocument = ({ photo_profile }) => ({
	permissions: {
		printing: 'highResolution',
		modifying: false,
		copying: false,
		annotating: true,
		fillingForms: true,
		contentAccessibility: false,
		documentAssembly: true
	},
	pageSize: 'A4',
	pageMargins: [24, 40, 24, 40],
	info: {
		title: 'CV Mukhlis Adhe Purwanto',
		author: 'Mukhlis Adhe Purwanto',
		subject: 'CV',
		keywords: 'Curriculum Vitae',
		creator: 'Mukhlis Adhe Purwanto',
		producer: 'Mukhlis Adhe Purwanto'
	},
	footer: (currentPage, pageCount) => {
		return [
			{
				margin: [24, 0],
				columns: [
					{
						width: 60,
						fillColor: '#ff00ff',
						text: `${dayjs().format('YYYYMMDD')}`,
						color: '#E2E2E2'
					},
					{
						width: '*',
						fillColor: '#ff0000',
						alignment: 'right',
						text: currentPage.toString() + ' of ' + pageCount
					}
				]
			}
		]
	},
	content: [
		{
			columns: [
				{
					width: 168,
					layout: 'noBorders',
					// fillColor: '#ff0000',
					table: {
						widths: ['*'],
						body: [
							[
								{
									width: 168,
									image: 'data:image/jpeg;base64,' + photo_profile,
									alignment: 'center'
								}
							],
							[{ text: 'Contact', style: 'titleStyle' }],
							[
								{
									width: '*',
									layout: 'noBorders',
									table: {
										widths: [16, '*'],
										body: [
											[
												{
													svg: locationIcon,
													fit: [18, 18]
												},
												'Bekasi'
											],
											[
												{
													svg: whatsappIcon,
													fit: [18, 18]
												},
												{
													text: '+6285329000180',
													link: 'https://wa.me/6285329000180'
												}
											],
											[
												{
													svg: emailIcon,
													fit: [18, 18]
												},
												{
													text: 'adhemukhlis@gmail.com'
														.split(/(.{21})/)
														.filter((chunk) => chunk.length > 0)
														.join('\n'),
													link: 'mailto:adhemukhlis@gmail.com'
												}
											],
											[
												{
													svg: githubIcon,
													fit: [18, 18]
												},
												{
													text: 'adhemukhlis'
														.split(/(.{21})/)
														.filter((chunk) => chunk.length > 0)
														.join('\n'),
													link: 'https://github.com/adhemukhlis'
												}
											],
											[
												{
													svg: linkedinIcon,
													fit: [18, 18]
												},
												{
													text: 'Mukhlis Adhe Purwanto',
													link: 'https://www.linkedin.com/in/mukhlis-adhe-purwanto-b06658128'
												}
											]
										]
									}
								}
							],
							[{ text: 'Skills', style: 'titleStyle' }],
							[
								{
									ul: ['Teamwork', 'Problem Solving']
								}
							],
							[{ text: 'Technical Skills', style: 'titleStyle' }],
							[
								{
									ul: ['Javascript', 'ReactJS', 'NextJS', 'Git', 'Docker']
								}
							],
							[{ text: 'Certifications', style: 'titleStyle' }],
							[
								{
									ul: ['BNSP Junior Web Developer']
								}
							]
						]
					}
				},
				{
					width: '*',
					layout: 'noBorders',
					// fillColor: '#00ff00',
					table: {
						widths: ['*'],
						body: [
							[{ text: 'Mukhlis Adhe Purwanto', style: 'fullNameStyle' }],
							[{ text: 'Front End Developer', fontSize: 12, bold: true }],
							[{ text: 'Bekasi, West Java, Indonesia', fontSize: 10 }],
							divider,
							[{ text: 'Summary', style: 'titleStyle' }],
							[
								{
									text: 'I create beautiful interfaces that are simple, friendly, and have optimal performance!',
									style: 'contentStyle'
								}
							],
							divider,
							[{ text: 'Experience', style: 'titleStyle' }],
							[
								{
									text: 'PT Wiratek Solusi Asia',
									style: 'titleContentStyle'
								}
							],
							[
								{
									text: `Front End Developer | July, 2021 - Present (${getHumanizeTime('2021-07-10')})`
								}
							],
							[{ text: 'Jakarta, Indonesia', fontSize: 10 }],
							[
								{
									text:
										'Developing frontend and UI/UX for user-facing component of various projects, utilizing javascript, Vue.js, and React.js. Sometimes also helping in backend and api development using NodeJS.',
									style: 'contentStyle'
								}
							],
							[
								{
									text: 'PT Samudra Biru Development',
									style: 'titleContentStyle'
								}
							],
							[
								{
									text: `Front End Developer | July, 2020 - March, 2021 (${getHumanizeTime('2020-07-22', '2021-03-10')})`
								}
							],
							[{ text: 'Bogor, Indonesia', fontSize: 10 }],
							[
								{
									text: 'Involved in developing frontend component for internal application like	payroll and HR apps.',
									style: 'contentStyle'
								}
							],
							divider,
							[{ text: 'Education', style: 'titleStyle' }],
							[
								{
									text: 'Bachelor of Computer Science',
									style: 'titleContentStyle'
								}
							],
							[
								{
									text: 'Institut Teknologi Telkom Purwokerto (2016 - 2023)'
								}
							],
							[
								{
									ul: ['GPA : 3.46', 'Development Of Cubar Math Educational Games Using The GDLC Method']
								}
							]
						]
					}
				}
			]
		}
	],
	styles: {
		fullNameStyle: {
			fontSize: 24,
			bold: true
		},
		titleStyle: {
			fontSize: 16,
			bold: true,
			margin: [0, gapSize, 0, 0]
		},
		titleContentStyle: {
			bold: true,
			margin: [0, gapSize / 2, 0, 0]
		},
		contentStyle: {
			alignment: 'justify',
			margin: [0, gapSize / 3, 0, 0]
		}
	},
	defaultStyle: {
		color: '#000',
		columnGap: gapSize
	}
})

export default templateDocument
