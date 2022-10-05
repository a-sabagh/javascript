function * gen(){
	let index = 0
	while (true) {
		try{
			yield index++
		} catch (e) {
			console.log(e)
		} 
	}
}

const g = gen()

console.log(g.next())
console.log(g.next())
console.log(g.next())
console.log(g.next())
console.log(g.throw(new Error('Error occured')))
console.log(g.next())
