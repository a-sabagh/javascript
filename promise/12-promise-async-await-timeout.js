async function foo(){

	const result = await new Promise ( (res,rej) => {
		setTimeout( () => res(1) )
	})
	console.log(result)

	const result2 = await new Promise ( (res,rej) => {
		setTimeout( () => res(2) )
	})
	console.log(result2)
}

console.log('script start')
foo()
console.log('script end')
