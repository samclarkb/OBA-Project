const main = document.querySelector('main')

export const render2 = data => {
	const results = data.results
	results.forEach((item, i) => {
		// renders a book component
		const html = `
        <div>
            <article>
             <img src="static/images/netherlands.png"/> 
             <div>
              <h2>${item.authors ? item.authors[0] : 'Geen samenvatting'}</h2>
              <p>${item.summaries ? item.summaries[0] : 'Geen samenvatting'}</p>
              </div>
            </article>
            </div>
          `
		main.insertAdjacentHTML('beforeend', html) // beforeend puts this HTML component right before the ending of the body
	})
}
