let mashhad = {
	name: 'Mashhad',
	greet() {
		console.log(`Welcome to ${this.name}`)
	}
}

console.log('__proto__===============================')
console.log(mashhad.__proto__)

console.log('Object.getPrototypeOf===================')
console.log(Object.getPrototypeOf(mashhad))
