const foo = new Promise ( (resolve,reject) => {
	resolve('foo')
})

const bar = new Promise ( (resolve,reject) => {
	resolve('bar')
})

foo.then( (result) => {
	console.log(result)
	return bar
}).then( (result2) => {
	console.log(result2)
}).catch( (error) => {
	console.error(error)
})
