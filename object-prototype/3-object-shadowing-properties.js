let d = new Date

console.log('Default getFullYear-------------------')
console.log(d.getFullYear())

console.log('Shadowing getFullYear-----------------')
d.getFullYear = function() {
	return '2019'
}
console.log(d.getFullYear())
