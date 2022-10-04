function * generateCounter(){
	for(let i=0;i<10;i++){
		yield i
	}
}

function * generateStudentList(name,counterGen){
	var counter = counterGen.next().value
	yield `${counter}-${name}`
	var counter = counterGen.next().value
	yield `${counter}-${name}`
	var counter = counterGen.next().value
	yield `${counter}-${name}`
}

let counterGen = generateCounter()
let studentListGen = generateStudentList('Abolfazl',counterGen)
console.log(studentListGen.next().value)
console.log(studentListGen.next().value)
console.log(studentListGen.next().value)


