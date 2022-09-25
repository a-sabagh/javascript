import loadImageBlob from './image-load.js'
import getImageList from './image-list.js'


getImageList()
.then( (response) => {
	return response.data.images
}).then( (imageList) => {
	let imageReqs = []
	imageList.forEach( (item,index) => {
		imageReqs.push(loadImageBlob(item))
	}) 
	return Promise.all(imageReqs)
}).then( (imageBlobs) => {
	imageBlobs.forEach( (blob,index) => {
		let image = new Image()
		let imageUrl = window.URL.createObjectURL(blob)
		image.src = imageUrl
		document.querySelector('.gallery').append(image)
	})
}).catch( (reason) => {
	console.error(reason)
})
