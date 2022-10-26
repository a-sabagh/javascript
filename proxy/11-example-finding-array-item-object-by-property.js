let target = [
	{name: 'firefox',type: 'browser'},
	{name: 'seaMonkey', type: 'browser'},
	{name: 'thunderbird', type: 'mailer'}
]

let handler = {
	get(target,prop,proxy){
		
		if(target[prop]){
			return target[prop]
		}

		if('number' == prop){
			return target.length
		}

		let result = new Array 
		let types = new Array

		for(const product of target){
			if(product.name == prop || product.type == prop){
				result.push(product)
			}
			if('types' == prop){
				if(!types.includes(product.type)){
					types.push(product.type)
					result = types
				}
			}
		}
		
		if(result.length > 0){
			return result
		}

		return undefined
	}
}

let p = new Proxy(target,handler)
console.log('Finding By index------------------------')
console.log(p[1])
console.log('Retrive Product Count-------------------')
console.log(p.number)
console.log('Find By Product Name--------------------')
console.log(p.seaMonkey)
console.log('Find By Product Type--------------------')
console.log(p.browser)
console.log(p.mailer)
console.log('Find Types------------------------------')
console.log(p.types)
console.log('Not Found!------------------------------')
console.log(p.chrome)
