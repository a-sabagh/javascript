if(undefined){
    console.log('undefined')
}

if(NaN){
    console.log('not a number')
}

if(null){
    console.log('null')
}

if(false){
    console.log('false')
}

console.log('-------------------------------------------')

if(undefined ?? true){
    console.log('undefined')
}
/* undefined */

if(NaN ?? true){
    console.log('not a number')
}

if(null ?? true){
    console.log('null')
}
/* null */

if(false ?? true){
    console.log('false')
}
