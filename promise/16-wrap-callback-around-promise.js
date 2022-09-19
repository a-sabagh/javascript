
/*
 * wrap setTimeout in promise in function to make it promise thenable 
 * this is the way to make old callback api promise based
 * resolve is neccessary for execute console.log('something else working')
 *
 */

const saySomething = (ms) => { 
	return new Promise( (resolve,reject) => {
		setTimeout( () => {
			console.log('it work') 
			resolve()
		} , ms) 
	})
}

async function foo() {
	await saySomething(3000)
	console.log('something else working')
}

foo()
