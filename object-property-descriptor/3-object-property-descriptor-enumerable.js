let person = {
	name: 'Abolfazl',
	age: 29,
	job: 'sfs',
}

Object.defineProperty(person,'_secret',{
	value: 'rioq2&95fkqrdxscji2fl124',
	writable: false,
	enumerable: false,
	configurable: true,
})

console.log(person,Object.getOwnPropertyDescriptor(person,'_secret'))
