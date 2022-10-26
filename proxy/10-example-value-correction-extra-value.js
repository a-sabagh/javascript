let target = {
	numberList: []
}

let handler = {
	set(target,prop,value){
		if('numberList' != prop){
			return undefined
		}
		value = parseInt(value)
		target.numberList.push(value)
	},
	get(target,prop,proxy){
		if('latest' == prop){
			return target['numberList'][target.numberList.length - 1]
		}
		return undefined
	}
}

let proxyNumberList = new Proxy(target,handler)

proxyNumberList.numberList = '3'
proxyNumberList.numberList = 'ali'
proxyNumberList.numberList = '54'
console.log(proxyNumberList)
console.log(proxyNumberList.latest)
