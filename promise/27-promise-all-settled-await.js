async function foo() {
	const result = await Promise.allSettled([
		new Promise( (res,rej) => { res(10) } ),
		new Promise( (res,rej) => { rej('error is occured') } ),
		15,
		'hello',
		Promise.resolve(10),
	])
	console.log(result)
}

foo()
