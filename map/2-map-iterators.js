let m = new Map

m.set(1,'papillon')
m.set(2,'free wild beest')
m.set(3,'PELICAN')

console.log('_____________________________________')

for(let item of m){
	console.log(item)
}

console.log('______________keys___________________')

for(let key of m.keys()){
	console.log(key)
}

console.log('______________values__________________')

for(let value of m.values()){
	console.log(value)
}

console.log('_____________entries__________________')

for(let entry of m.entries()){
	console.log(entry)
}

console.log('______entries with destructuring_______')

for(let [key , value] of m.entries()){
	console.log(key,value)
}

console.log('______________forEach__________________')

m.forEach((item,index) => {
	console.log(item,index)
})


