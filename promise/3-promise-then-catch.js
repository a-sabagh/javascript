let promiseCallback = (resolve,reject) => {
     reject("Error");
}

let samplePromise = new Promise(promiseCallback);

samplePromise.catch(
     (onReject) => {
          console.error(onReject);
     }
);