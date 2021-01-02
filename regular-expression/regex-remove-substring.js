let str = "http://gnutec.net";
let regexExp = /https*:\/\//g;
let replaceStr = '';
let finalStr = str.replace(regexExp,replaceStr);
console.log(finalStr);
