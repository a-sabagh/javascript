function * powerGenerator(n){
	//endless loop
	for(let number = n; ;number *= n){
		yield number
	}
}

const powerGen = powerGenerator(2)

console.log(powerGen.next().value)
console.log(powerGen.next().value)
console.log(powerGen.next().value)
console.log(powerGen.next().value)
console.log(powerGen.next().value)
console.log(powerGen.next().value)
console.log(powerGen.next().value)
console.log(powerGen.next().value)
