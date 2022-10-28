class CalculatorLogic {

	static sum(x,y){
		return x + y
	}

	static multiple(x,y){
		return x * y
	}

	static power(x){
		return CalculatorLogic.multiple(x,x)
	}

}

console.log(CalculatorLogic.sum(10,5))
console.log(CalculatorLogic.power(2))
console.log(CalculatorLogic.multiple(4,2))
