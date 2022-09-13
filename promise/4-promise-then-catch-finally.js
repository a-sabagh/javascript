let promiseCallback = (resolve,reject) => {
     if(false){
          resolve("Success");
     }else{
          reject("Fail");
     }
}

let samplePromise = new Promise(promiseCallback);

samplePromise.then(
     (onSuccess) => {
          console.log("Then block on success: " + onSuccess);
     }
).catch(
     (onFail) => {
          console.log("Catch block on Fail: " + onFail);
     }
).finally(
     () => {
          console.log("Promise Ended");
     }
);