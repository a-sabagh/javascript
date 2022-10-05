function * gen(){
	try{
		yield 1
		yield 2
		yield 3
	}finally{
		yield 'finally'
	}
}

const g = gen()
console.log(g.next())
console.log(g.next())
console.log(g.return('early return'))
