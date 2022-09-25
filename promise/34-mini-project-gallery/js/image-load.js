export default function loadImageBlob(relativePath) {
	return new Promise( (resolve,reject) => {
		let request = new XMLHttpRequest
		request.responseType = 'blob'
		request.open('GET',relativePath)
		request.send()
		request.onload = () => {
			if(4 == request.readyState && 200 == request.status){
				resolve(request.response)
			}
			let statusText = request.statusText
			reject(`error with image load ${statusText}`)
		}
	})
}
