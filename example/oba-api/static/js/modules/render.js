import { time } from './time.js'
import { languages } from './languages.js'
const main = document.querySelector('main')

export const render = data => {
	const results = data
	results.forEach((item, i) => {
		// renders a book component
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
		main.insertAdjacentHTML('beforeend', html) // beforeend puts this HTML component right before the ending of the body
	})
}
