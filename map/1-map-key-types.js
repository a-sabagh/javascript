let m = new Map

let keyString = 'a string'
let keyObject = {}
let keyFunction = function(){}

m.set(keyString,'value with string')
m.set(keyObject,'value with object key')
m.set(keyFunction,'value with function key')

console.log(m.size,m)

console.log(m.get(keyString))
console.log(m.get(keyObject))
console.log(m.get(keyFunction))

console.log(m.get('a string'))
console.log(m.get({})) //undefined, beacuse of keyObject !== {}
console.log(m.get(function (){})) //undefined beacuse of keyFunction !== function (){}
