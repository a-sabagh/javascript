class countdownTimer {

	constructor(minuteElement,secondElement,counter){
		this.minuteElement = minuteElement
		this.secondElement = secondElement
		this.counter = counter
		this.event = new Event('counter')
	}

	calculateParams() {
		this.second = this.counter % 60
		this.minute = Math.floor(this.counter / 60)
		return this
	}

	setHtml(){
		this.minuteElement.innerHTML = this.minute
		this.secondElement.innerHTML = this.second
		return this
	}

	setStatus(status){
		this.status = status
		return this
	}

	start = () => {
		if('start' == this.status){
			return this
		}
		this.timerInterval = setInterval(() => {
			this.calculateParams().setHtml()
			this.counter--
			if(0 == this.counter){
				document.dispatchEvent(this.event)
				this.stop()
			}
		},1000)
		this.setStatus('start')
		return this
	}

	pause = () => {
		if('pause' == this.status){
			return this
		}
		clearInterval(this.timerInterval)
		this.setStatus('pause')
		return this
	}

	stop = () => {
		if('stop' == this.status){
			return this
		}
		this.pause().counter = 0
		this.setStatus('stop').calculateParams().setHtml()
		document.dispatchEvent(this.event)
		return this
	}

	restart = (counter) => {
		if('restart' == this.status){
			return this
		}
		this.stop().counter = counter
		this.setStatus('restart').start()
		return this
	}

}
