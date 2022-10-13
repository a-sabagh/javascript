const ali = {
	name: 'ali',
	famil: 'alavi',
	age: 21,
	job: 'sfs',

	walk(){
		console.log('walking...')
	},
	introduce(){
		console.log(`Hello my name is ${this.name}`)
	}
}

console.log('Properties==============================')
console.log(
	'Name: ',ali['name'],
	'Famil: ',ali['famil'],
	'Age: ',ali['age'],
)

console.log('Methods=================================')
ali['walk']()
ali['introduce']()
