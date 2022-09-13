function happyProgrammersDay(){
	return new Promise((resolve,reject) => {
		if(true){
			resolve()
		}else{
			reject()
		}
	})
}

function happy(){
	console.log('happy')
}

function programmers(){
	console.log('programmers')
}

function day() {
	console.log('day')
}


happyProgrammersDay()
.then( () => {
	setTimeout( () => {
		return happy()
	},1000)
})
.then( () => {
	setTimeout( () => {
		return programmers()
	},3000)
})
.then( () => {
	setTimeout( () => {
		return day()
	},5000)
})
.catch( (error) => {
	console.error(error)
})
