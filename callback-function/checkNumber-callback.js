let checkNumber = (number,callback) => {
     setTimeout(() => {
          let result = 0 == number % 2;
          callback(result); 
     }, 2000 + number*100);
}


checkNumber(4,function(result){
     console.log(4,result);
});

checkNumber(5,function(result){
     console.log(5,result);
});

checkNumber(7,function(result){
     console.log(7,result);
});