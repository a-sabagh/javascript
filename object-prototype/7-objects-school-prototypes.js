let Person = {
	name: '',
	setName(name) {
		this.name = name
	},
	getName(){
		return this.name
	}
}

let Professor = Object.create(Person)
Professor.setName('Dennise Ritchie')
Professor.teach = 'Computer sience'

let Student = Object.create(Person)
Student.setName('Abolfazl Sabagh')
Student.grade = 20

console.log('Person,Professor,Student-------------')
console.log(Person,Professor,Student)
