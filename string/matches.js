let map = {
    "^\/posts\/(\\d+)$": function(params){
        console.table(params)
    }
}
let str = "/posts/12"
for(let regString in map){
    let regex = new RegExp(regString)
    let matches = str.match(regex)
 		map[regString](matches)
}
