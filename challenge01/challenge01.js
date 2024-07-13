//? Tasks/Acitivities

// Activity 1: Variable Declaration
    // Task 1: Declare a variable using var , assign it a number, and log the value to console.
    var num1 = 10;
    console.log(num1);

    // Task 2: Declare a variable using let , assign it a String, and log the value to console.
    let str = "String has been declared";
    console.log(str);

// Activity 2: Constant Declaration
    // Task 3: Declare a constant using const , assign it a boolean and log the value to console.
    const boolValue = false;
    console.log(boolValue);

//Activity 3: Data Types
    //Task 4 : Create a variable of different datatypes and log the value to console with typeof operator
    let a = 10;
    let b = "10";
    let c = true;
    let obj = {a:1, b:2};
    let array = [1,2,3];
    console.log(typeof a);
    console.log(typeof b);
    console.log(typeof c);
    console.log(typeof obj);
    console.log(typeof array);

//Activity 4: Reassign Variables
    //Task 5: Reassign the value of a variable and log the value to console
    let check = 10;
    check = 20;
    console.log(check);

// Activity 5: understanding Const
    //Task 6: Change the value of const variable and log the value to console
    const checkValue = 10;
    checkValue = 20;
    console.log(checkValue);


// Feature Request :
    // 1: variable Types Console log: Write a script that declares variables of different data types  and logs the value of each variable to the console

    let num = 42;
    let str1 = "Hello Javascript";
    let bool = true;
    let obj1 = {name:"shaoon",techStack:"MERN"};
    let arr = [1,2,3];
    let undef;
    let nul = null;
    let sym = Symbol();
    let date = new Date();


console.log(`num: ${num}, type: ${typeof num}`);
console.log(`str: ${str}, type: ${typeof str}`);
console.log(`bool: ${bool}, type: ${typeof bool}`);
console.log(`obj: ${obj}, type: ${typeof obj}`);
console.log(`arr: ${arr}, type: ${typeof arr}`);
console.log(`undef: ${undef}, type: ${typeof undef}`);
console.log(`nul: ${nul}, type: ${typeof nul}`);
console.log(`sym: ${sym.toString()}, type: ${typeof sym}`);

//Reassignment Demo:
let value1 = 100;
value1 = 200;

console.log(`value1: ${value1} `);

const value2 = 400;
value2 = 400;

console.log(`value2: ${value2} `);