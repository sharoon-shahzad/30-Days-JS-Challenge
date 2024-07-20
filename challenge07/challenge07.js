
const books ={
    title: "book1",
    author : "author1",
    year : 2000,
}
console.log(books);

//Task02
console.log(books.title);
console.log(books.author);

//Task 03
books.bkDetails = ()=>
{
    console.log(books.title,books.author,books.year);
}

books.bkDetails();

//? Task 04
books.upateyear = (year)=>
{
    books.year = year;
    console.log(books.year);
}

books.upateyear(2023)

//? Task05
const library ={
    name:"library1",
    books:[
        {
            title: "book1",
            price:200
        },
        {
            title: "book2",
            price:500
        }
    ],
}
console.log(library);

//? Task06
console.log(library.name);
console.log(library.books.title);

let titles = library.books.map((bk)=>
{
    return bk.title
})
console.log(titles);

//use forin loop with object
for (const key in books) {
    if (books.hasOwnProperty(key)) {
        console.log(`${key}: ${books[key]}`);
    }
}



// Log all keys
const keys = Object.keys(books);
console.log("Keys:", keys);

// Log all values
const values = Object.values(books);
console.log("Values:", values);
