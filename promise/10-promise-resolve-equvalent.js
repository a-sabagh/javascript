const a = new Promise( (res,rej) => {
	res(10)
})
const b = Promise.resolve(10)
const c = async () => {
	return 10
}
const d = Promise.resolve(a)
/*----------------------------------------------------------------*/
console.log(a,b,c(),d) /* Promise { 10 } Promise { 10 } Promise { 10 } Promise { 10 } */
console.log(a==b) //false
console.log(a==c()) //false
console.log(a==d) //true
/*----------------------------------------------------------------*/
a.then( (result) => {
	console.log(result) //10
})
/*----------------------------------------------------------------*/
b.then( (result) => {
	console.log(result) //10
})
/*----------------------------------------------------------------*/
c().then( (result) => {
	console.log(result) //10
})
/*----------------------------------------------------------------*/
d.then( (result) => {
	console.log(result) //10
})
