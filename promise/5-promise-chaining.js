function doSomething(){
	return new Promise((resolve,reject) => {
		return resolve('happy')
	})
}


doSomething()
.then( (response) => {
	console.log(response)
	return 'programmers'
})
.then( (response) => {
	console.log(response)
	return 'days'
})
.then( (response) => {
	console.log(response)
})
.catch( (error) => {
	console.log(error)
})
