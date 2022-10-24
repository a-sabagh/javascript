let target = {
	name: 'ali',
	age: 27,
	_id: 20014242,
}

let handler = {
	has(target,key){
		if('_' == key[0]){
			return false
		}
		return true
	}
}

let p = new Proxy(target,handler)
console.log('_id' in p)
