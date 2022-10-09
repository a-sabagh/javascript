let s1 = new Set([1,2,3,4,5])
let s2 = new Set([6,7,8,9,10])

let union = new Set([...s1])
/*let union = new Set(s1)*/
for(let s of s2){
	union.add(s)
}

console.log(union)
