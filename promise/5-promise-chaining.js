function happyProgrammersDay(){
	return new Promise((resolve,reject) => {
		return resolve('happy')
	})
}


happyProgrammersDay()
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
