const a = async () => {
	let value = await 1
	console.log(value)
	let value2 = await 2
	console.log(value2)
	return 5
}

a().then( result => console.log(result) )
console.log(3)
console.log(4)

/*3,4,1,2,5*/
