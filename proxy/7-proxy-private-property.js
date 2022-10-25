class Template{
	#secret
}

let target = new Template
let handler = {}

let p = new Proxy(target,handler)
console.log(p.#secret)
/* Private field '#secret' must be declared in an enclosing class */

