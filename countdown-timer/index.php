<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Count Down Timer</title>
</head>
<body>
	<div class="countdown-timer">
		<span id="minute">0</span>:<span id="second">0</span>	
	</div>
	<script src="./countdown-timer.js"></script>
	<script>
	document.addEventListener('counter',function(){
		console.log('counter is finished and stop !!')
	})
	let minuteElement = document.getElementById('minute')
	let secondElement = document.getElementById('second')
	let counter = 2000
	let timer = new countdownTimer(minuteElement,secondElement,counter)
	console.log(timer.counter)
	</script>
</body>
</html>
