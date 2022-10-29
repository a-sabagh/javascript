function trailingslashit(url){
	return (url.endsWith('/'))? url : `${url}/`
}

let homeUrl = "https://gnutec.net"
console.log(trailingslashit(homeUrl))

