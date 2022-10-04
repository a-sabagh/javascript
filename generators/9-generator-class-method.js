class Person{
	*step(){
		for(let i=0;i<5;i++){
			yield i
		}
		return 'you arrive'
	}
}

const ali = new Person
const aliGen = ali.step()
console.log(aliGen.next().value)
console.log(aliGen.next().value)
console.log(aliGen.next().value)
console.log(aliGen.next().value)
console.log(aliGen.next().value)
console.log(aliGen.next().value)
console.log(aliGen.next().value)
