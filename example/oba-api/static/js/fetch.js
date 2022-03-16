import { render } from './render.js'

// const endpoint = 'https://zoeken.oba.nl/api/v1/search/?q='
// const query = 'voedingsleer'
// const key = '1e19898c87464e239192c8bfe422f280'
// const detail = 'Default'
// const url = `${cors}${endpoint}${query}&authorization=${key}&detaillevel=${detail}&output=json`
const secret = '4289fec4e962a33118340c888699438d'
const config = {
	Authorization: `Bearer ${secret}`,
}

export const fetch = () => {
	fetch('voeding.json', config)
		.then(response => {
			return response.json()
		})
		.then(data => {
			render(data)
			// popup(data)
		})
		.catch(err => {
			console.log(err)
		})
}
