const doFirst = new Promise ( (resolve) => {
	return resolve('first')
})

const doSecond = new Promise ( (resolve,reject) => {
	return reject('error on second process')
})

doFirst.then ( (result) => {
	doSecond.then( (result) => {
		console.log('doSecond then handler')	
	}).catch( (error) => {
		console.error('second execution',error)
	})
}).then( (result) => {
	console.log(result)
}).catch ( (error) => {
	console.error('first execution',error)
})

/*
 **** UnhandledPromiseRejectionWarning: error on second process ****
doFirst.then ( (result) => {
	doSecond.then( (result) => {
		console.log('doSecond then handler')	
	})
}).then( (result) => {
	console.log(result)
}).catch ( (error) => {
	console.error('first execution',error)
})
*/
