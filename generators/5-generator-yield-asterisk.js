function * generatorPlus(p){
	for(i=1;i<5;i++){
		yield p+i
	}
}

function * generator(i){
	yield i
	yield * generatorPlus(i)
	yield 5
}

const counterGen = generator(0)
console.log(counterGen.next().value)//0
console.log(counterGen.next().value)//1
console.log(counterGen.next().value)//2
console.log(counterGen.next().value)//3
console.log(counterGen.next().value)//4
console.log(counterGen.next().value)//5
console.log(counterGen.next().value)//undefined
