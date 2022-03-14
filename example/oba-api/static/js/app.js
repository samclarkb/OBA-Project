/*** Fetching data -> refactor into module later ***/
const main = document.querySelector('main')
const cors = 'https://cors-anywhere.herokuapp.com/'
const endpoint = 'https://zoeken.oba.nl/api/v1/search/?q='
const query = 'voedingsleer'
const key = '1e19898c87464e239192c8bfe422f280'
const secret = '4289fec4e962a33118340c888699438d'
const detail = 'Default'
const url = `${cors}${endpoint}${query}&authorization=${key}&detaillevel=${detail}&output=json`

const config = {
	Authorization: `Bearer ${secret}`,
}

fetch('voeding.json', config)
	.then(response => {
		return response.json()
	})
	.then(data => {
		render(data)
	})
	.catch(err => {
		console.log(err)
	})

// render data
function render(data) {
	const results = data
	console.dir(results)
	results.forEach((item, i) => {
		console.log(item)
		const html = `
            <article>
            <img src="${item.coverimages ? item.coverimages[1] : 'Geen samenvatting'}"/> 
            <div>
            <h2>${item.titles[0]}</h2>
            
              <p>${item.summaries ? item.summaries[0] : 'Geen samenvatting'}</p>
              </div>
            
            </article>
          `
		main.insertAdjacentHTML('beforeend', html)
	})
}
