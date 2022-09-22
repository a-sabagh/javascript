const wait = (ms) => {
	return new Promise((resolve)=> {
		setTimeout( resolve ,ms )
	})
}

wait(0).then( () => {
	console.log(4) 
} )
Promise.resolve()
.then( () => {
	console.log(2)
}).then( () => {
	console.log(3)
})

console.log(1)

