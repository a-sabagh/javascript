let m1 = new Map([
	[0,'papillon'],
	[2,'free wild beest'],
	[3,'PELICAN'],
])

let m2 = new Map([
	[4,'success'],
	[5,'calm'],
	[6,'technique'],
])

let merged = new Map([...m1,...m2])
console.log(merged.entries())
