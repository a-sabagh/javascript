var requestXHR = function(e){

	e.preventDefault()
	var formElement = document.forms.namedItem('login')
	var fd = new FormData(formElement)

	const request = new XMLHttpRequest()
	request.open('POST','server.php')
	request.send(fd)
	request.onreadystatechange = function(){
		if(request.response.length == 0 || request.readyState != 4){
			return
		}
		let responsBodyArray = JSON.parse(request.response)
		let responsCollection = {
			readyState: request.readyState,
			requestUrl: request.responseURL,
			responsBody: responsBodyArray,
			requestStatusCode: request.status,
			requestStatusText: request.statusText,
		}
		console.log(responsCollection)
	}
}
