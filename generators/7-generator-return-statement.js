function * gameGenerator(name){
	yield  `welcome to our game ${name}`
	yield 'level one'
	yield 'level tow'
	yield 'level three'
	return `you win ${name}`
	/* after this section is unreachable beacuse of return */
}

const gameGen = gameGenerator('Abolfazl')
console.log(gameGen.next().value)//welcome to our game Abolfazl
console.log(gameGen.next().value)//level one
console.log(gameGen.next().value)//level tow
console.log(gameGen.next().value)//level three
console.log(gameGen.next().value)//you win Abolfazl
