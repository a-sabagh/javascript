function * generator(){
	console.log('run a')
	yield 'a'
	console.log('run b')
	yield 'b'
	console.log('run c')
	yield 'c'
}

let gen = generator()
let result = []

console.log('start of program')
result.push(gen.next())
console.log('middle of program')
result.push(gen.next())
console.log('end of program')
result.push(gen.next())
console.log(result)
