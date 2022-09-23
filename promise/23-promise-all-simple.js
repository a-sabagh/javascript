const foo = new Promise ( (resolve,reject) => {
	resolve('foo')
})

const bar = new Promise ( (resolve,reject) => {
	resolve('bar')
}) 

Promise.all( [foo,bar] ).then( (result) => {
	console.log(result) 
})
