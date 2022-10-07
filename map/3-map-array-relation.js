
let arr = [
	[0,'papillon'],
	[1,'free wild beest'],
	[2,'pelikan'],
]

console.log('map constructor args---------------------')
let m = new Map(arr)
console.log(m.entries())

console.log('create array from map --------------------')
console.log(Array.from(m))
console.log([...m])
console.log(Array.from(m.keys()))
console.log(Array.from(m.values()))
