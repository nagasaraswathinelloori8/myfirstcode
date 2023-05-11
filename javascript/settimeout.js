const myPromise = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("Promise Resolved");
      }, 1000);
    });
  };
  
  myPromise().then((fromResolve) => {
    console.log(fromResolve); // Promise Resolved
  });