let person = {
	name: 'ali',
	age: 21
}

let descriptor = Object.getOwnPropertyDescriptor(person,'name')
console.log(descriptor)
