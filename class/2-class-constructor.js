class Person {

	constructor(name){
		this.name = name
	}

	setName(name){
		this.name = name
	}

	getName(){
		return this.name
	}

}

const ali = new Person('Ali')
console.log(ali.name,ali.getName())
