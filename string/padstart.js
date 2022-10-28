let cardNumber = '5023491277249123'
let cardNumberEnd = cardNumber.slice(-4)
let secretCardNumber = cardNumberEnd.padStart(cardNumber.length - 4 , '*')
console.log(secretCardNumber)
