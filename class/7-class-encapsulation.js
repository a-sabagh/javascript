class Programmer {

	name
	#year = 3

	constructor(name){
		this.name = name
	}

	isSenior(){
		return this.year > 5
	}
	
}

const ali = new Programmer('Ali')
console.log(ali.isSenior())
