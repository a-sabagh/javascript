const obj = {
	generator: function * (){
		yield 1
		yield 2
	}
}
const obj1 = obj.generator()
console.log(obj1.next().value)
console.log(obj1.next().value)
