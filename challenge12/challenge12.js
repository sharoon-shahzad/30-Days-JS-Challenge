function ThrowError() {
  try {
    throw new Error("Error");
  } catch (error) {
    console.log(error);
  }
}
function CheckDemoninatior(num1, num2) {
  try {
    if (num2 == 0) throw new Error("Denominator cannot be zero");
    else console.log(Math.round(num1 / num2));
  } catch (error) {
    console.log(error);
  }
}
// CheckDemoninatior(2,0);

function greetUser(name) {
  try {
    if (name === "") {
      throw new Error("Name cannot be empty");
    }
    console.log(`Hello ${name}`);
  } catch (error) {
    console.log(error.message);
  } finally {
    console.log("Thank you");
  }
}
// greetUser("sharoon");

// class CustomError extends Error {
//   constructor(message) {
//     super(message);
//     this.name = "CustomError";
//   }
// }
// function throwErrorFunction() {
//   throw new CustomError("This is custom error message");
// }
// try {
//   throwErrorFunction();
// } catch (error) {
//   if (error instanceof CustomError) {
//     console.error(`Caught a custom error: ${error.message}`);
//   } else {
//     console.error(`Caught an unexpected error: ${error.message}`);
//   }
// }

class CustomError extends Error {
    constructor(message) {
      super(message);
      this.name = "ValidationError";
    }
  }
function validatesUser(userInput)
{
    if(userInput.trim() === ""){
        throw new ValidationError("input cannot be empty");
    }
    return true;
}
try {
    validatesUser("")
} catch (error) {
    if(error instanceof ValidationError){
        console.log(error.message);
    }else{
        console.log(error.message);
    }
}

// Graful error handling in promises
 Promise((res, rej) => {
  const randomVal = Math.random();
  if (randomVal > 0.5) {
    setTimeout(() => {
      res("Promise is being resolve ");
    }, 2000);
  }
  else{
    rej("failed");
  }
}).then(() => {
  console.log("success Promise resolved!");
}).catch((error) => {
  console.log(error);
})


const rndAsyncPromise = new Promise((res,rej)=>
{
  const randomVal = Math.random();
  if(randomVal > 0.5){
    setTimeout(() => {
      res("Promise is resolved : success ");
    }, 2000);
  }
  else{
    rej("failed");
  }
})

async function handleRandomPromise(rndAsyncPromise){
  
  try{
    const result = await rndAsyncPromise;
    console.log(result);
  }
  catch(error){
    console.log(error);
  }
}
handleRandomPromise(rndAsyncPromise);


// Graceful error handling with fetch
fetch('https://jsonplaceholder.typicode.com/user')
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

//using async await 
async function getUserData(){

  try {
    let url = 'https://jsonplaceholder.typicode.com/users';
    let respone = await fetch(url);
    let data = await respone.json();
    console.log(data);
  } catch (error) {
    console.log("Error resolving the promise",error)
  }

}
getUserData();