var requestXHR = function(e){

	e.preventDefault()
	var formElement = document.forms.namedItem('login')
	var fd = new FormData(formElement)

	$.ajax({
		url: "server.php",
		type: "post",
		data: fd,
		processData: false,
		contentType: false,
		success: function(respons){
			console.log(respons)
		}
	});

}
