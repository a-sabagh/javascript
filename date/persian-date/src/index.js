import persianDate from 'persian-date'

window.convertJalali = (event) => {
	let targetValue = event.target.value
	let date = new Date(targetValue)
	let pd = new persianDate(date)
	let arr = [
		pd.format('dddd'),
		pd.format('MMMM'),
		pd.format('YYYY'),
		pd.format('h:mm:ss a'),
		pd.format(),
	]
	console.log(targetValue,arr)
	document.querySelectorAll('li').forEach((item,index)=>{
		item.querySelector('span').innerText = arr[index]
	})
}
