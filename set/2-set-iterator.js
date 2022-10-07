let s = new Set([
	'papillon','free wild beest','pelican',
])

console.log('for of statement------------------------------------------')
for(let item of s){
	console.log(item)
}

console.log('loop through keys-----------------------------------------')
for(let key of s.keys()){
	console.log(key)
}

console.log('loop through values---------------------------------------')
for(let value of s.values()){
	console.log(value)
}

console.log('loop through items---------------------------------------')
for(let item of s.entries()){
	console.log(item)
}

console.log('forEach instance method----------------------------------')
s.forEach((item,key) => {
	console.log(item,key)
})

