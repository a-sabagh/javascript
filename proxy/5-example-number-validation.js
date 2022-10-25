let handler = {
	set(target,prop,value,proxy){
		if('mount' == prop){
			value = (value <= 12)? value : undefined	
		} else if('day' == prop){
			value = (value <= 31)? value : undefined	
		}
		target[prop] = value
	}
}

let target = {
	year: 0,
	mount: 0,
	day: 0,
}

let p = new Proxy(target,handler)
p.mount=20
p.day = 33
p.year = 2022
console.log(p)
