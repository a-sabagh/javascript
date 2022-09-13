let promisCallback = (resolve,reject) => {
     if(0 == number % 2){
          resolve("Number is even");
     }else{
          reject("Number is odd");
     }
}

let samplePromise = new Promise(promisCallback);

samplePromise.then(
     (onSuccess) => {
          console.log(onSuccess);
     },
     (onReject) => {
          console.log(onReject);
     }
);