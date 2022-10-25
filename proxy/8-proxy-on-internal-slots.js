let target = new Map
let handler = target

let p = new Proxy(target,handler)
console.log(target.size) // 0
console.log(p.size) //undefined
