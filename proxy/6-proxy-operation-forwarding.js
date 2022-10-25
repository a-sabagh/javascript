let target = {}
let handler = {}

let p = new Proxy(target,handler)
p.a = 'hello world'
console.log(target,p)
