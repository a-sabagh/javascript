export default function getImageList(){
	return new Promise( (resolve,reject) => {
		let request = new XMLHttpRequest
		request.responseType = 'json'
		request.open('GET','glob.php')
		request.send()
		request.onload = () => {
			if(4 == request.readyState && 200 == request.status){
				resolve(request.response)
			}
			reject('error occured with fetching image list')
		}
	})
}
