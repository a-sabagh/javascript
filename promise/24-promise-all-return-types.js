/* empty value */
Promise.all([]).then( (result) => {
	console.log(result)
})

/* reject value */
Promise.all( [
	new Promise( (res,rej) => { res('foo') } ),
	new Promise( (res,rej) => { res('bar') } ),
	new Promise( (res,rej) => { rej('error is occured') } ),
]).then( (result) => {
	console.log(result)
}).catch( (error) => {
	console.error(error)
})

/* none Promise value */
Promise.all( [
	new Promise( (res,rej) => { res('foo') } ),
	new Promise( (res,rej) => { res('bar') } ),
	13,
]).then( (result) => {
	console.log(result) 
}).catch( (error) => {
	console.error(error)
})
