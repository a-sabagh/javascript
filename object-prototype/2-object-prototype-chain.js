function prototypeChain(object) {
	do {
		object = Object.getPrototypeOf(object)
		console.log(object)
	} while (object)
}

let date = new Date
let set = new Set
let map = new Map

console.log('=============== Date ==================')
prototypeChain(date)

console.log('=============== Map ===================')
prototypeChain(map)

console.log('=============== Set ===================')
prototypeChain(set)

