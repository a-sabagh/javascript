function * whoAmI(){
	yield 'A'
	yield 'b'
	yield 'o'
	yield 'l'
	yield 'f'
	yield 'a'
	yield 'z'
	yield 'l'
}

var name=''
const gen = whoAmI()

do{
	var yield = gen.next()
	name = (undefined != yield.value) ? name + yield.value : name
} while(!yield.done)

console.log(name)
