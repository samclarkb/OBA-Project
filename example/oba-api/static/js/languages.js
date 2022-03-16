export const languages = data => {
	console.log(data.languages)
	if (data.languages[0] == 'Nederlands') {
		// console.log('test')
		const image = '<img src="static/images/netherlands.png"/>'
		return image
	}
	if (data.languages[1] == 'Duits') {
		// console.log('test')
		const image = '<img src="static/images/germany.png"/>'
		return image
	} else {
	}
}

export const time = data => {
	// console.log(data.languages[0])
	const paginas = data.description[0].replace(/\D/gm, '')
	if (paginas > 0 && paginas < 150) {
		console.log('test')
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
