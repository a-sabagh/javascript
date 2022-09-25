const A = new Promise( (res,rej) => {
	setTimeout(rej,3000,'A')
})

const B = new Promise( (res,rej) => {
	setTimeout(res,5000,'B')
})

const C = new Promise( (res,rej) => {
	setTimeout(res,4000,'C')
})

Promise.any([A,B,C]).then( (result) => {
	console.log(result)
})

//warning: Promise.any is not defined in node js, run this code in mozilla imulator
