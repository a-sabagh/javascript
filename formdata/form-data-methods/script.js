var requestXHR = function(e){

	e.preventDefault()
	var formElement = document.forms.namedItem('login')
	var fd = new FormData(formElement)

}

function formDataRuned(event){
	
	var fd = event.formData
	fd.append('token','5125fsaktqt50lk')
	fd.delete('username')
	fd.get('token')
	fd.getAll('password') //get all with array structure
	fd.has('username')
	fd.set('password','helloadmin')

	// password,token
	for(let key of fd.keys()){
		console.log(key)
	}

	//Array [ "password", "admin" ]
	for(let pair of fd.entries()){
		console.log(pair)
	}

	for(let value of fd.values()){
		console.log(value)
	}

	//const request = new XMLHttpRequest() ...
}
