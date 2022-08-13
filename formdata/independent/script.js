var requestXHR = function(){
	const fd = new FormData()
	fd.append('username','asabagh')
	fd.append('password','admin')

	var blob = new Blob(['hello world, it work'],{type: 'plain/text'})
	fd.append('resume',blob)

	var profile = document.querySelector('#profile').files[0]
	fd.append('profile',profile)

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
