var requestXHR = function(e){

	e.preventDefault()
	var formElement = document.forms.namedItem('login')
	var fd = new FormData(formElement)

}

function formDataRuned(event){
	
	var fd = event.formData
	for(let value of fd.values()){
		console.log(value)
	}

	//const request = new XMLHttpRequest() ...
}
