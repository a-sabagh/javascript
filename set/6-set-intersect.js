let s1 = new Set([1,2,3,4])
let s2 = new Set([4,5,6])

let intersect = new Set([...s1].filter( (value) => {
	return s2.has(value)
}))
console.log(intersect)

