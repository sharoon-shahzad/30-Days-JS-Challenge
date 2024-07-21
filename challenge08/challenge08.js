
//! Task 01
const PersonName = "Sharoon";
const age = 22;
let templateString = `My name is ${PersonName} and my age is ${age}`;
console.log(templateString);

//! Task 02
const multiLineString = `code doesnt work why?
it works why?`;
console.log(multiLineString);

//! Array Desturing 
const Array = ["apple", "mango", "banana"];
const [fruit1, fruit2, fruit3] = Array;
console.log(fruit1, fruit2, fruit3);

//! Object Desturing
const book = {
    title: "think and grow rich",
    author: " Napolean Hill",
    year: 1945
}
const {title,author} = book;
console.log(title, author);


//! Task 05
const marvelHeros = ["Iron Man", "Captain America", "Hulk", "Thor"];
const dcHeros = ["Superman", "Flash", "Batman", "Green Lantern"];
const allHeros = [...marvelHeros, ...dcHeros,"sharoon"];
console.log(allHeros)


const result = function(...args)
{
    let sum = 0;
     sum += args;
    return sum;
}
console.log(result(1,2,3,4,5,6,7,8,9,10));

//Default Parameter 
const defaultParam =(num1 , num2=2)=>
{
    return num1*num2;
}
console.log(defaultParam(10));


//! Task08
const pname = 'sharoon'
const agee = 20;

const Person = {
    pname,
    agee,
    greet()
    {
        console.log(`Hello ${this.pname}`);
    },
    [`isAdult`]()
    {
        return this.agee>=18
    }
}
/

console.log(Person);
console.log(`Is adult : ${Person.isAdult()}`);

