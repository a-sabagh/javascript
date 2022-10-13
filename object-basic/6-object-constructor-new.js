function Person(iname){
	this.name = iname
	this.introduce = function(){
		console.log(`Hello my name is ${this.name}`)
	}
}

const ali = new Person('ali')
console.log(ali)
ali.introduce()
