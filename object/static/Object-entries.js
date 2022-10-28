let person = {
	name: 'Abolfazl',
	age: 29,
	job: 'sfs'
}

Object.entries(person).map( ([key,value]) => {
	console.log(key,value)
})
