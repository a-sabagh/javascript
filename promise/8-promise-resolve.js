Promise.resolve('success').then( (result) => {
	console.log(result)
})

Promise.resolve([0,1,2,3,4]).then( (result) => {
	console.log(result)
})
