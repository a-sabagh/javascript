class Person {

	construct(name){
		this.name = name
	}

	setName(name){
		this.name = name
	}

	getName(){
		return this.name
	}

	introduceSelf(){
		console.log(`Hello my name is ${this.name}`)
	}

}

class Student extends Person{

	constructor(name,year){
		super(name)
		this.year = year
	}

	introduceSelf(){
		console.log(`Hello my name is ${this.name} and on ${this.year} year`)
	}

}

class Proffessor extends Person {

	constructor(name,teach){
		super(name)
		this.teach = teach
	}

	introduceSelf(){
		console.log(`Hello my name is ${this.name} and teaching ${this.teach}`)
	}

}

const david = new Student('David',2)
david.introduceSelf()

const dennis = new Proffessor('Dennis','Unix')
dennis.introduceSelf()

