import { fetch } from './modules/fetch.js'

// const secret = '4289fec4e962a33118340c888699438d'
// const config = {
// 	Authorization: `Bearer ${secret}`,
// }

// const test = data => {
// 	const waarde = document.querySelector('[type="radio"]:checked')

// 	let data2

// 	data2 = data.map(d => {
// 		// console.log(d.description[0].replace(/\D/gm, ''))
// 		// console.log(d.description[0].replace(/\D/gm, ''))
// 		if (d.description[0].replace(/\D/gm, '') < 150) {
// 			return d
// 		}
// 	})
// 	// console.log(data2)
// 	const data3 = data2.filter(function (element) {
// 		return element !== undefined
// 	})
// 	console.log(data3)
// 	render(data3)
// }

// const resultaten = data => {
// 	const paginas = data.description[0].replace(/\D/gm, '')
// 	data.map(data => {
// 		if (paginas > 0 && paginas < 150) {
// 			// If a book has less than 150 pages, then return a specific image
// 			console.log('test')
// 			const image = '<img src="static/images/tijd1.png"/>'
// 			return image
// 		}
// 	})
// }

// const filter = () => {
// 	let waarde = document.querySelector('[type="radio"]:checked').value
// 	results = document.getElementById('results')
// 	results.innerHTML = waarde
// }

// filter()

fetch()
