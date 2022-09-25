const A = new Promise( (res,rej) => { console.log('promise pending') } )
const B = new Promise( (res,rej) => { res(true) })
const C = new Promise( (res,rej) => { rej('error') })

console.log(A,B,C)
//Promise { <pending> } Promise { true } Promise { <rejected> 'error' }
