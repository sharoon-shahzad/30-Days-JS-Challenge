function checkEvenOdd(x) {
  // if( x% 2 === 0)
  // {
  //     console.log('even');
  // }
  // else{
  //     console.log('odd');
  // }
  //? better approach
  let res = x % 2 === 0 ? "even" : "odd";
  console.log(res);
}
checkEvenOdd(5);

//squares
function squares(x)
{
    return Math.sqrt(x);
}
console.log(squares(7));


//function expressions
let max = function ( x , y)
{
    let maxNum = x > y ? 'x is max' : 'y is max'
    return maxNum;
}
console.log(max(5,7));

let concatString = function(str1 , str2)
{
    let concat = str1.concat(str2);
    return concat;
}
console.log(concatString("jesus","christ is the only way and the only light"));


//Arrow functions
let sum = ((num1 , num2)=>
{
    return num1 + num2;
})
console.log(sum(6,6));

const containChar = (str , char) => str.includes(char); 
console.log(containChar("sharoon","n"));


//Function Parameter and Default values
// let product = (num1 , num2) => num1*num2;
let product = ((num1 ,num2 = 2)=>
{
    return num1 * num2;
})
console.log(product(2));

let greet = ((name, age = "22")=>{
    console.log(`Hello ${name} your age is ${age}`);
})

greet("sharoon");

// Higher order functions
// higher-order function takes functioin and a number  and calls function that many times

let myFunc = (func , num) => {
    for(let i = 0 ; i < num ; i++)
    {
        func();
    }
}
myFunc(()=> console.log("Hello World") , 5)

// more modular way
// let myFunc = (func , num)=>
// {
//     for(let i = 0 ; i<num ; i++)
//     {
//         func();
//     }
// }
// const func = ()=> console.log("hello");

// myFunc(func , 5 );




let myFunc2 = (func1, func2, value) => {
    let res = func1(value);   // Apply func1 to value
    return func2(res);        // Apply func2 to the result of func1
}

const func1 = (value) => value * value;  // Function to square the value
const func2 = (res) => res + 3;          // Function to add 3 to the result

let result = myFunc2(func1, func2, 4);   // Call myFunc2 with func1, func2, and the value 4
console.log(result);                     // Output the result
