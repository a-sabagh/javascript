let target = {
	name: 'ali',
	age: 20,
}

let handler = {
	get(target,prop,reciever){
		console.log(target,prop,reciever)
		return target[prop]
	}
}

let p = new Proxy(target,handler)
console.log(p.name)
