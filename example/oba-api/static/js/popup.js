const article = document.querySelector('#hallo')
const popupje = document.querySelector('#nee')

export const showPopup = () => {
	article.addEventListener('click', () => {
		popupje.classList.add('show')
	})
}

function popup(data) {
	const results = data
	console.dir(results)
	results.forEach((item, i) => {
		const html = `
      <div id='nee'>
            <article >
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
