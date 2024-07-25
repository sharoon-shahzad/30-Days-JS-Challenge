const resolvePromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Async task is completed after 2 secs ");
    }, 2000);
  });
  resolvePromise.then(() => {
    console.log("Promise one is consumed");
  });
  
  const rejectPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      const error = false;
      if (!error) {
        resolve({
          username: "sharoon",
          email: "chai@example.com",
        });
      } else {
        reject("Something went wrong");
      }
    });
  });
  rejectPromise
    .then((user) => {
      console.log(user);
    })
    .catch((error) => {
      console.log(error);
    });
  
  // chaining Promises
  Promise((res, rej) => {
    setTimeout(() => {
      console.log("Async task 01 is completed");
      res();
    }, 1000);
  })
    .then(() => {
      console.log("promise one consumed");
      return Promise((res, rej) => {
        setTimeout(() => {
          console.log("Async task 02 is completed");
          res();
        }, 2000);
      });
    })
    .then(() => {
      comsole.log("Promise 2 consumed");
    })
    .catch((error) => {
      console.log("something went wrong");
    });
  
  //! using ASYNC/AWAIT
  const AsyncPromise = new Promise((res, rej) => {
    setTimeout(() => {
      res({
        promiesType: "async",
        username: "sharoon",
        email: "chai@example.com",
      });
    }, 2000);
  });
  async function consumeAsyncPromise() {
    const respones = await AsyncPromise;
    console.log(respones);
  }
  
  const AsyncPromise02 = new Promise((res, rej) => {
    setTimeout(() => {
      let err = true;
      if (!err) {
        res({
          promiesType: "async",
          username: "sharoon",
          email: "chai@example.com",
        });
      }
      else{
        rej("something went wrong");
      }
    }, 2000);
  });
  
  try {
    async function consumeAsyncPromise02() {
      const respones = await AsyncPromise02;
      console.log(respones);
    }  
    
  } catch (error) {
    console.log(error);
  }
  
  
  
  // working with Fetch apis
  fetch('https://jsonplaceholder.typicode.com/users')
  .then((response)=>
  {
     return response.json();
  })
  .then((data)=>
  {
     console.log(data)
  })
  .catch((error)=>
  {
     console.log("E",error)
  })
  
  // usnig async/await
  async function getAllUsers(){
    try {
      let response = await fetch('https://jsonplaceholder.typicode.com/users')
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.log("E",error)
    }
  }
  
  //Concuurent Promises
  const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Promise 1 is resolved");
    }, 1000);
  });
  
  const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Promise 2 is resolved");
    }, 2000);
  });
  
  const promise3 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Promise 3 is resolved");
    }, 3000);
  });
  Promise().all([promise1, promise2, promise3])
  Promise.race([promise1, promise2, promise3])