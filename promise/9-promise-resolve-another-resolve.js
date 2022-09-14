const original = Promise.resolve(33);
console.log('original',original) //Promise { 33 }

const another = Promise.resolve(original).then( (result) => {
	console.log('result',result)
})

console.log('another',another) //pending
