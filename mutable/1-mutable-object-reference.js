let a = {
	foo: 'bar'
}

let b = a
b.foo='test'
console.log(a.foo,b.foo,a===b) //test,test,true
/* the object a is mutable */
