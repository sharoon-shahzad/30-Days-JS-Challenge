//Task 01
for (let i = 1; i <= 10; i++) {
  console.log(i);
}

//Task 02
let num = 5;
for (let i = 1; i <= 10; i++) {
  console.log(`${num} * ${i} = ${num * i}`);
}

//Task 03
let sum = 0;
let x = 1;
while(x<=10){
    sum+=x;
    x++;
}
console.log(sum);

//Task 04
let n = 10;
while(n>=0)
{
    console.log(n);
    n--;
}

//Task 05
//Do while loop
let value =0;
do{
    value+=1
    value++
}while(value<=5);
console.log(value);

//Task 06
//pattern priting 
for (let i = 1; i <= 7; i++) {
    let pattern = ""; // Initialize an empty string to build the pattern
    for (let j = 1; j <= i; j++) {
        pattern += " *"; // Append an asterisk for each inner loop iteration
    }
    console.log(pattern); // Print the pattern after the inner loop completes
}
