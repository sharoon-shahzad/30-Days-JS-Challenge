//practicing map filter and reduce
let books = [
  {
    title: "book1",
    author: "author1",
    year: 2000,
    price:200
  },
  {
    title: "book2",
    author: "author2",
    year: 2001,
    price:500
  },
  {
    title: "book3",
    author: "author3",
    year: 2002,
    price:1000
  },
  {
    title: "book4",
    author: "author4",
    year: 2003,
    price:900
  },

];
const filteredbooks = books.filter((bk)=>
{ 
  return bk.year > 2000 && bk.title === "book4"
})
console.log(filteredbooks);


const Bookdetails = books.map((bk,index)=>
{
  if(index === 1)
  {
    return {...bk, title:"Think and grow rich!"}
  }
  return bk;
})
console.log(Bookdetails);



const numbers = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const result = numbers.map((num)=>
{
  return num*2;
})
console.log(result);


//method chaining

const superHeros = [
  {
    name: "Spiderman",
    power: "spidey sense"
  },
  {
    name: "Superman",
    power: "flying"
  },
  {
    name: "Batman",
    power: "money"
  }
]
let myFavHero = superHeros.filter((hero)=>
{
  return hero.power === "spidey sense"
}).map((hero)=>
{
  return {...hero, fav:true}
})
console.log(myFavHero);

//reduce
const values = [1,2,3,4]

const result1 = values.reduce((acc,curr)=>
{
  console.log(`acc: ${acc}, curr: ${curr}`);
  return acc+curr;
},0)
console.log(result1);