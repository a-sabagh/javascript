function foo(){
	console.log('foo')
}

Promise.resolve().then( () => {
	foo()
})

console.log('hello world')
