let s1 = new Set([1,2,3,4,5,6])
let s2 = new Set([4,5,6,7,8,9])

let sd = new Set([...s1])

for(let item of s2){
	if(sd.has(item)){
		sd.delete(item)
	}else{
		sd.add(item)
	}
}

console.log(sd)

