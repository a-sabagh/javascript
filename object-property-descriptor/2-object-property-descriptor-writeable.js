let person = {
	name: 'abolfazl',
	age: 21,
	_secret: 'rm248aj&412jawiwnzqwer124usim',

}

Object.defineProperty(person,'_secret',{
	writable: false,
})

person._secret = undefined
person.age = 29

console.log(person)
