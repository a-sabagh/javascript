let handler = {
	set(target,prop,value,proxy){
		if('mount' == prop && value > 12){
			throw new RangeError('invalid value for Mount')
		} else if('day' == prop && value > 31){
			throw new RangeError('invalid value for Day')
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
