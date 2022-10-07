let a = {
	foo: 'bar'
}

let b = Object.assign({},a)
b.foo='test'
console.log(a.foo,b.foo,a===b) //'bar','test',true
