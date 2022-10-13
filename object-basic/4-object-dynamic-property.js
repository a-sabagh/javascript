const persons = [
	{
		name: 'ali',
		famil: 'alavi',
	} ,
	{
		name: 'ahmad',
		famil: 'ahmadi',
	} , 
	{
		name: 'mohamad',
		famil: 'mohamadi',
	}
]

function getProp(propName){
	for(let person of persons){
		console.log(person[propName])		
	}
}

console.log('Poperty `name`=======================')
getProp('name')

console.log('Property `famil`=====================')
getProp('famil')
