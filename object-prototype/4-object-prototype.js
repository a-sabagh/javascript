let Person = {
	name: undefined,
	setName: function(name){
		this.name = name
	},
	getName: function(){
		return this.name
	}
}

let ali = Object.create(Person)
ali.setName('Ali')
console.log(ali.getName())
