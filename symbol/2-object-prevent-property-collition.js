let tool = {
	key: 'dnessandlonelinessofthewholeworldpoursthrough',
	value: 'Ebi'
}

let lib1 = function(tool){
	this.tool = tool
	this.key = Symbol('key')
	this.tool[this.key] = Math.random().toString().slice(2)
	this.getKey = () => {
		return this.tool[this.key]
	}
}

let toolLib = new lib1(tool)
console.log(toolLib.getKey())
console.log(tool.key)

