import { render } from './render.js'
import { render2 } from './render2.js'

const endpoint = 'https://zoeken.oba.nl/api/v1/search/?q='
const cors = 'https://cors-anywhere.herokuapp.com/'
const query = 'voedingsleer'
const key = '94b246d9246caa361b548deec6d3e32c'
const detail = 'Default'
const secret = '4289fec4e962a33118340c888699438d'
const config = {
	Authorization: `Bearer ${secret}`,
}

export const getData2 = () => {
	const url = `${cors}http://obaliquid.staging.aquabrowser.nl/onderwijs/api/v1/search/?q=voeding+NOT+lom.lifecycle.contribute.publisher%3Dwikipedia&authorization=${key}&output=json`
	fetch(url, config)
		.then(response => {
			return response.json()
		})
		.then(data => {
			console.log(data)
			render2(data)
		})
		.catch(err => {
			fetch('API2.json')
				.then(response => response.json())
				.then(data => {
					render2(data)
				})
			// console.log(err)
		})
}

export const getData = () => {
	const url = `${cors}${endpoint}${query}&authorization=${key}&detaillevel=${detail}&output=json`
	fetch(url, config)
		.then(response => {
			return response.json()
		})
		.then(data => {
			render(data)
		})
		.catch(err => {
			fetch('voeding.json')
				.then(response => response.json())
				.then(data => {
					render(data)
				})
			// console.log(err)
		})
}
