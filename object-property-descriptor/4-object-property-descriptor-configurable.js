let person = {
	name: 'Abolfazl',
	age: 29,
	job: 'sfs',
}

Object.defineProperty(person,'_secret',{
	value: 'helledean4235&%1kfasdiqemz',
	enumerable: true,
	configurable: false,
	writable: false,
})

Object.defineProperty(person,'_secret',{
	value: undefined,
	writeable: true,
})

console.log(person) /* TypeError: Cannot redefine property: _secret */
