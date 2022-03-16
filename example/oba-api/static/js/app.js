// import { fetch } from './fetch.js'
// import { render } from './render.js'

const main = document.querySelector('main')
const secret = '4289fec4e962a33118340c888699438d'
const config = {
	Authorization: `Bearer ${secret}`,
}

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

// <p>${item.description[0].replace(/\D/gm, '') + " pagina's"}</p>

export const render = data => {
	const results = data
	console.dir(results)
	results.forEach((item, i) => {
		const html = `
        <div>
            <article id='hallo'>
            <img src="${item.coverimages ? item.coverimages[1] : 'Geen samenvatting'}"/> 
            <div>
            <h2>${item.titles[0]}</h2>
              <p>${item.authors ? item.authors[0] : 'Geen samenvatting'}</p>
              <p>${item.summaries ? item.summaries[0] : 'Geen samenvatting'}</p>
              <section>
          <div>
              ${time(item)}
              </div>
              <div>
              ${languages(item)}
              </div>
              </section>
            </article>
            </div>
          `
		main.insertAdjacentHTML('beforeend', html)
	})
}

export const languages = data => {
	if (data.languages[0] == 'Nederlands') {
		// console.log('test')
		const image = '<img src="static/images/netherlands.png"/>'
		return image
	}
	if (data.languages == 'Duits') {
		// console.log('test')
		const image = '<img src="static/images/germany.png"/>'
		return image
	} else {
	}
}

export const time = data => {
	const paginas = data.description[0].replace(/\D/gm, '')
	if (paginas > 0 && paginas < 150) {
		// console.log('test')
		const image = '<img src="static/images/tijd1.png"/>'
		return image
	}
	if (paginas > 150 && paginas < 300) {
		const image = '<img src="static/images/tijd2.png"/>'
		return image
	}
	if (paginas > 300) {
		const image = '<img src="static/images/tijd3.png"/>'
		return image
	} else {
		return ''
	}
}

const filter = () => {
	let waarde = document.querySelector('[type="radio"]:checked').value
	results = document.getElementById('results')
	results.innerHTML = waarde
}

filter()

// fetch()
// render()
