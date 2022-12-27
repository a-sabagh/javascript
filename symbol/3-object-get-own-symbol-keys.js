let obj = {}
let a = Symbol('a')
let b = Symbol('b')

obj[a] = 'localSymbol1'
obj[b] = 'localSymbol2'

let objSymbols = Object.getOwnPropertySymbols(obj)
console.log(objSymbols)
for(let key of objSymbols){
	console.log(obj[key])
}
