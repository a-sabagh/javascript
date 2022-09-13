let checkNumber = (number) => {
     let checkNumberPromise = new Promise((resolve)=>{
          setTimeout(() => {
               if (0 == number % 2) {
                    resolve('Valid Number');
               }else{
                    reject("Invalid Number")
               }
          }, 2000);
     });
     return checkNumberPromise;
}

let samplePromise = checkNumber(10);

samplePromise.then((onSuccess)=>{
     console.log(onSuccess);
}).catch((onError)=> {
     console.log(onError);
}).finally(() => {
     console.log("finally");
});