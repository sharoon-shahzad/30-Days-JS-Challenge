

const arr = [1,2,3,4,5]
console.log(arr);

const firstElement = arr[0];
console.log(firstElement);

const lastElement = arr[arr.length-1];
console.log(lastElement)

//Arrays methods

const fruits = ['orange', 'apple', 'mango'];
fruits.push('banana');
console.log(fruits);

fruits.pop();
console.log(fruits)

fruits.unshift('kiwi');
console.log(fruits);

fruits.shift();
console.log(fruits)

//Higher Order Array Methods
const values = [1,2,3,4,5,6,7,8,9];
const res = values.map((val)=>
{
    return val * 2;
})

//filter
const Numbers = [ 1, 2, 3, 4, 5 ];
const res1 = Numbers.filter((val) => {
  return val % 2 === 0;
})
console.log(res1);

const total = Numbers.reduce((acc,curr)=>
{
    return acc + curr
},0)
console.log(total);


const iterableArr = [1, 2, 3, 4, 5];
for(let i =0 ; i<iterableArr.length ; i++)
{
    console.log(iterableArr[i]);
}
iterableArr.forEach((val)=>
{
    console.log(val);
})