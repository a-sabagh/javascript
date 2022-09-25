const A = new Promise( (res,rej) => {
	rej('error')
})

Promise.resolve(A).then( (result) => {
	console.log(result)
}).catch( (error) => {
	console.error(error)
})
