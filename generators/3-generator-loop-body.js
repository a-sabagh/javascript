function * loopThrow(count) {
	for(let i=0;i<count;i++){
		yield i
	}
}

for(let counter of loopThrow(10)){
	console.log(counter)
}
