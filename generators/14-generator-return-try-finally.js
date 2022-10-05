function * gen(){
	try{
		yield 1
	} finally {
		return 'finally'
	}
}

const g = gen()
console.log(g.next())
console.log(g.return('early return'))

