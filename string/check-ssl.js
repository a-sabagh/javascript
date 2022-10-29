function checkSSL(url){
	return url.startsWith('https')
}

let homeUrl = 'https://gnutec.net'
console.log(checkSSL(homeUrl))
