let target = {
	name: 'ali',
	age: 27
}

let handler = {
	get(target,prop,reciever){
		if(prop in target){
			return target[prop]
		}
		return 'Default value'
	}
}

let p = new Proxy(target,handler)
console.log(p.job)
