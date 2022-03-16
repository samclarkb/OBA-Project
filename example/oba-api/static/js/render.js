import { time } from './languages.js'
import { languages } from './languages.js'

const main = document.querySelector('main')

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
              <p>${item.description[0].replace(/\D/gm, '') + " pagina's"}</p>
              ${time(item)}
              ${languages(item)}

              </div>
            
            </article>
            </div>
          `
		main.insertAdjacentHTML('beforeend', html)
	})
}
