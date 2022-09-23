const foo = new Promise ( (resolve,reject) => {
	setTimeout( () => {
		resolve('foo')
	},5000)
})

const bar = new Promise ( (resolve,reject) => {
	resolve('bar')
}) 

Promise.all( [foo,bar] ).then( (result) => {
	console.log(result) 
})
