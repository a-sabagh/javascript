const Person = (iname) => {
	this.name = iname
	this.introduce = function() {
		console.log(`Hello my name is ${this.name}`)
	}
	return this
}

const ali = Person('ali')
console.log(ali)
ali.introduce()
