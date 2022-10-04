function * logGenerator(){
	for(let i=0;i<10;i++){
		console.log(i,yield)
	}
}

const logGen = logGenerator()

logGen.next() //must runed until first yield
w
exit
logGen.next('reza') //0 'reza'
logGen.next('fateme') //1 'fateme'
logGen.next('abolfazl') //2 'abolfazl'
logGen.next('zahra') //3 'zahra'
