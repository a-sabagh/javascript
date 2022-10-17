class Person {

	setName(name){
		this.name = name
	}

	getName(){
		return this.name
	}

}

const ali = new Person
ali.setName('Ali')
console.log(ali.getName())
