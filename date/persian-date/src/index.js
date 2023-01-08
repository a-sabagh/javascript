import persianDate from 'persian-date'

window.convertJalali = (event) => {
	let targetValue = event.target.value
	let pd = new persianDate(targetValue)
	let arr = [
		pd.format('dddd'),
		pd.format('MMMM'),
		pd.format('YYYY'),
		pd.format('h:mm:ss a'),
		pd.format(),
	]
	document.querySelectorAll('li').forEach((item,index)=>{
		item.querySelector('span').innerText = arr[index]
	})
}
