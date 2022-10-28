let cardNumber = '5023491277249123'
let cardNumberEnd = cardNumber.slice(0,4)
let secretCardNumber = cardNumberEnd.padEnd(cardNumber.length - 4 , '*')
console.log(secretCardNumber)
