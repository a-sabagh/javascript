function * generatorNumber(start){
	for(let i=start; ;i++){
		yield i
	}
}

const numGen = generatorNumber(10)
for(let i=0;i<10;i++){
	console.log(numGen.next().value)
}
