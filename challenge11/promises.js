//takes callback function
//helps tackling the callback hell
// const promiseOne = new Promise(function (res, rej) {
//   //Do an async task
//   //Db calss , cryptography , network
//   setTimeout(function () {
//     console.log("Async task is completed");
//     res();
//   }, 2000);
// });

// promiseOne.then(() => {
//   console.log("Promise one is consumed");
// });

// new Promise((res, rej) => {
//   setTimeout(() => {
//     console.log("Async task 02 is completed");
//     res(); // related to promise completion
//   }, 1000);
// }).then(() => {
//   console.log("Promise two is consumed");
// });

// const Promise03 = new Promise((res, rej) => {
//   setTimeout(() => {
//     console.log("Async task 03 is completed");
//     res({ username: "sharoon", email: "chai@example.com" }); //! related to promise completion and if somedata is being returned from database as promise so how should is be returned? reslove() does that for us
//   }, 1000);
// }).then((user) => {
//   console.log("Promise three is consumed with user object", user);
// });

// const promise04 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     let error = false;
//     if (!error) {
//       resolve({
//         username: "shark",
//         email: "kH4Z6@example.com",
//       });
//     } else {
//       reject("Something went wrong");
//     }
//   });
// });
// promise04
//   .then((user) => {
//     console.log(user);
//     return user.username;
//   })
//   .then((username) => {
//     console.log(username);
//   })
//   .catch((error) => {
//     console.log(error);
//   })
//   .finally(() => {
//     //default: always executed
//     console.log("I am always executed");
//   });
// //handling promises with async and await

const Promise05 = new Promise((resolve, reject) => {
  setTimeout(() => {
    let error = false;
    if (!error) {
      resolve({
        username: "promise05",
        email: "prmise05@example.com",
      });
    } else {
      reject("Something went wrong");
    }
  }, 1000);
});

async function consumePromise05() {
  try {
    const response = await Promise05;
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}
consumePromise05();


// async function getAllUsers(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users');
//         const data = await response.json();
//         console.log(data)
//     } catch (error) {
//         console.log("E",error)
//     }
// }

// getAllUsers();

 // handling same request for fetching users with .then()
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