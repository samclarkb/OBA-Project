export const languages = data => {
	let image = ''
	if (data.languages.includes('Nederlands')) {
		// If the language is Netherlands, then show the national flag of the Netherlands
		image += '<img src="static/images/netherlands.png"/>'
	}
	if (data.languages.includes('Duits')) {
		// If the language is German, then show the national flag of Germany
		image += '<img src="static/images/germany.png"/>'
	}
	if (data.languages.includes('Engels')) {
		// If the language is German, then show the national flag of Germany
		image += '<img src="static/images/english.png"/>'
	}
	if (data.languages.includes('Arabisch')) {
		// If the language is German, then show the national flag of Germany
		image += '<img src="static/images/arabic.png"/>'
	} else {
	}
	return image
}
