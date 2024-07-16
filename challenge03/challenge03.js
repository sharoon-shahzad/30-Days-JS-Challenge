//? Task01
let num = 4;
if (num === 0) {
  console.log("Number is zero!");
} else if (num < 0) {
  console.log(`Number is Negative`);
} else {
  console.log(`Number is positive`);
}
//? Task 02
let userAge = 18;
// if (userAge < 18) {
//   console.log("Underage to vote!");
// } else {
//   console.log("Eligible to vote!");
// }
let mssg = userAge >= 18 ? "eligible" : "not eligible!";
console.log(`${mssg}`);

//? Task 03
let a = 10;
let b = 20;
let c = 30;
if (a > b && a > c) {
  console.log("a is greates!");
} else if (b > a && b > c) {
  console.log("b is greatest!");
} else {
  console.log("c is greatest!");
}

//? Task 04
let weekDay = parseInt(prompt("Enter your age:"), 10);
switch (weekDay) {
  case weekDay === 1:
    console.log("Monday");
    break;
  case weekDay === 2:
    console.log("Tuesday");
    break;
  case weekDay === 3:
    console.log("Wednesday");
    break;
  case weekDay === 4:
    console.log("Thursday");
    break;
  case weekDay === 5:
    console.log("Friday");
    break;
  case weekDay === 6:
    console.log("Saturday");
    break;
  case weekDay === 7:
    console.log("Sunday");
    break;
  default:
    console.log("Invalid Input");
}
//? Task 05
let grade;
let Score = parseInt(prompt("Enter score"), 10);
switch (Score) {
  case Score >= 90:
    grade = "A";
    break;
  case Score >= 80:
    grade = "B";
    break;
  case Score >= 70:
    grade = "C";
    break;
  case Score >= 60:
    grade = "D";
    break;
  default:
    grade = "F";
}
console.log(grade);
//? Task 06

let checkNum = parseInt(prompt("Enter a number:"), 10);
let result = checkNum ? console.log("Even") : console.log("Odd");
console.log(result);

//?Task 07
let checkLeapYear = 2023;
//?steps:
//? general rule : divisible by 4
//? century rule : should be divisible by 400
// if(checkLeapYear % 4 === 0){
//   //century rule()
//   if((checkLeapYear % 400 === 0) || ( checkLeapYear % 100 !== 0) )
//   {
//     console.log('Leap year');
//   }
//   else{
//     console.log("not leap year")
//   }
// }
// else{
//   console.log('Not leap year');
// }

// let checkLeapYear = 2000;

// // General rule: divisible by 4
// // Century rule: divisible by 400 or not divisible by 100

if ((checkLeapYear % 4 === 0 && checkLeapYear % 100 !== 0) || (checkLeapYear % 400 === 0)) {
    console.log('Leap year');
} else {
    console.log('Not a leap year');
}
