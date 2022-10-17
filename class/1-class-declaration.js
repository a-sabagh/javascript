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

	introduceSelf(){
		console.log(`Hello my name is ${this.name}`)
	}

}

const ali = new Person('ali')
ali.introduceSelf()
ali.setName('Alireza')
ali.introduceSelf()
