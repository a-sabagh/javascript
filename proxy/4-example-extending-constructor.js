function extendingContructor(parent,base){
	let exn = new Function
	exn.prototype.constructor = new Proxy(base,{
		construct(target,args,newTarget){
			let object = new Object
			this.apply(target,object,args)
			return object
		},	
		apply(target,object,args){
			parent.apply(object,args)
			base.apply(object,args)
		}
	})
	return exn.prototype.constructor
}

function Parent (name){
	this.name = name
	this.getName = function(){
		return this.name	
	}
}

function Children(name,age){
	this.age = age,
	this.getAge = function(){
		return this.age	
	}
}

let Person = extendingContructor(Parent,Children)
let ali = new Person('ali',29)
console.log(ali.getAge())