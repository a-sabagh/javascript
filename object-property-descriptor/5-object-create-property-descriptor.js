let person = Object.create(Object.prototype,{
	name: { value: 'Abolfazl', writable: true, enumerable: true, configurable: true},
	age: {value: 29, writable: true, enumerable: true, configurable: true},
	_secret: {value: 'ingasdggakfadi7854jkf',writable: false,enumerable: false, configurable: false},
})

console.log(person)
