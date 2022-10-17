let ali = {
	    name: 'Ali'
}

console.log('non static Method---------------------------------')
console.log(ali.hasOwnProperty('name'))

console.log('static Method-------------------------------------')
console.log(Object.hasOwn(ali,'name'))
