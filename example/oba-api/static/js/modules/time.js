export const time = data => {
	const paginas = data.description[0].replace(/\D/gm, '')
	// Removes all the letters within the array
	if (paginas > 0 && paginas < 150) {
		// If a book has less than 150 pages, then return a specific image
		const image = '<img src="static/images/tijd1.png"/>'
		return image
	}
	if (paginas > 150 && paginas < 300) {
		// If a book has a number of pages that lies between 150 and 300, then return a specific image
		const image = '<img src="static/images/tijd2.png"/>'
		return image
	}
	if (paginas > 300) {
		const image = '<img src="static/images/tijd3.png"/>' // If a book has more than 300 pages, then return a specific image
		return image
	} else {
		return ''
	}
}
