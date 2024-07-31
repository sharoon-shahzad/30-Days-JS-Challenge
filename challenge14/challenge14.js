// class Person {
//   constructor(firstname, lastname, age) {
//     this.firstname = firstname;
//     this.lastname = lastname;
//     this.age = age;
//   }
//   setFirstName = function (firstname) {
//     this.firstname = firstname;
//   };
//   setLastName = function (lastname) {
//     this.lastname = lastname;
//   };
//   getFullName = function () {
//     return `${this.firstname} ${this.lastname}`;
//   };

//   greeting = function () {
//     console.log(`Welcome ${this.firstname + " " + this.lastname} `);
//   };
//   updateAge = function (age) {
//     return (this.age = age);
//   };
//   static greetings = function () {
//     console.log("This generic greeting message!");
//   };
// }
// // let person1 = new Person("sharoon", 25);

// // person1.greeting();

// // console.log(person1.updateAge(26))

// class Student extends Person {
//   static count = 0;
//   constructor(name, age, studentId) {
//     super(name, age);
//     this.name = name;
//     Student.count++;
//     this.age = age;
//     this.studentId = studentId;
//   }
//   getStudentId = function () {
//     return this.studentId;
//   };
//   greeting = function () {
//     return `Hello, my name is ${this.name}, I am ${this.age} years old, and my student ID is ${this.studentId}.`;
//   };
//   static countStudents = function () {
//     console.log(`There are ${Student.count} students in the class.`);
//   };
// }
// let student1 = new Student("Messi", 25, 10);
// // console.log(`${student1.getStudentId()}`);
// console.log(`${student1.greeting()}`);

// let student2 = new Student("Ronaldo", 25, 7);
// console.log(`${student2.greeting()}`);

// Student.countStudents();

// private fields

class Account {
  #balance = 0;
  constructor(balance) {
    this.#balance = balance;
  }
  deposit = function (amount) {
    if (amount < 0) {
      console.log("Invalid amount");
    } else {
      this.#balance += amount;
      console.log("Deposited successfully");
    }
  };
  withdraw = function (amount) {
    if (amount > 0 && amount <= this.#balance) {
      this.#balance -= amount;
      console.log(`${amount} Withdrawn successfully`);
    }
    else{
        console.log("Invalid amount");
    }
  };
  getbalance = function () {
    return this.#balance;
  };
}

let account = new Account(1000);
account.deposit(500);
console.log(account.getbalance());
account.withdraw(200);  
console.log(account.getbalance());