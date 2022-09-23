const p1 = Promise.all( [] );
const p2 = Promise.all([
	14,
	'thiery henry',
	new Promise( (res,rej) => { res('Arsenal') } )
])

console.log(p1,p2)
/*
 * p1 Promise {"fullfilled"}
 * p2 Promise { <pending> }
 */
