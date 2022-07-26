import {countdownTimer} from './countdown-timer.js'

document.addEventListener('counter',function(){
	console.log('counter is finished and stop !!')
})
var minuteElement = document.getElementById('minute')
var secondElement = document.getElementById('second')
var counter = 2000
window.timer = new countdownTimer(minuteElement,secondElement,counter)

