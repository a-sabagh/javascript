function resolveAfter2second(){
	console.log('slow function is start')
	return new Promise( (res,rej) => {
		setTimeout( () => {
			res('slow')
			console.log('slow function is done')
		},2000)
	})
}

function resolveAfter1second() {
	console.log('fast function is start')
	return new Promise ( (res,rej) => {
		setTimeout( () => {
			res('fast')
			console.log('fast function is done')
		},1000)
	})
}

async function exec(){
	const slowResponse = resolveAfter2second()
	const fastResponse = resolveAfter1second()
	console.log(await slowResponse,await fastResponse)
}

exec()
