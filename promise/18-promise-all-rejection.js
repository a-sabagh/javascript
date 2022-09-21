const p1 = new Promise((resolve,reject) => {
	setTimeout( () => { resolve(5) },1000)
})

const p2 = new Promise((resolve,reject) => {
	setTimeout( () => { resolve(6) },2000)
})

const p3 = new Promise((resolve,reject) => {
	setTimeout( () => { reject('error occured') },8000)
})

const p4 = new Promise((resolve,reject) => {
	setTimeout( () => { resolve(8) },9000)
})

Promise.all([p1,p2,p3]).then( (values) => {
	console.log(values)
}).catch( (error) => {
	console.log(error)
})
