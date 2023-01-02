import moment from 'moment'

window.dateFormatted = (event) => {
	let m = moment(event.target.value)
	let arr = [
		m.format('dddd'),
		m.format('MMMM'),
		m.format('YYYY'),
		m.format('h:mm:ss a'),
		m.format(),
	]
	document.querySelectorAll('li').forEach((item,index)=>{
		item.querySelector('span').innerText = arr[index]
	})
}
