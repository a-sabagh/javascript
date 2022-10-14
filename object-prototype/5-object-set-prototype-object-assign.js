let PersonPrototype = {
	setName(name){
		this.name = name
	},
	getName(){
		return this.name
	}
}

function Person(name){
	this.name = name
}

Object.assign(Person.prototype,PersonPrototype)

let ali = new Person('Ali')
console.log(ali.getName())
