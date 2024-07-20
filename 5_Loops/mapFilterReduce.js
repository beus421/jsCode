// can a for each return values?
// nope 

// so lets look at 
// ++++++++++++++++++  filter  +++++++++++++++++++

const coding = ["js", "py", "c++", "sql", "ruby", "java"];
const nums = [2, 8, 7, 5, 3, 1];

// let l = coding.filter( (lang) => {lang != ''}) // this is wrong remember explicit return
let l = coding.filter((lang) => lang != "");
// console.log(l)

// let n = nums.filter( (num) => {num >= 1}) // wrong wont return if you use curly brackets
// if you use {} than youll have to write return manually

let n = nums.filter((num) => num >= 1);
// console.log(nums.filter( (num) => num >= 1));

const books = [
  { title: "Book One", genre: "Fiction", publish: 1981, edition: 2004 },
  { title: "Book Two", genre: "Non-Fiction", publish: 1992, edition: 2008 },
  { title: "Book Three", genre: "History", publish: 1999, edition: 2007 },
  { title: "Book Four", genre: "Non-Fiction", publish: 1989, edition: 2010 },
  { title: "Book Five", genre: "Science", publish: 2009, edition: 2014 },
  { title: "Book Six", genre: "Fiction", publish: 1987, edition: 2010 },
  { title: "Book Seven", genre: "History", publish: 1986, edition: 1996 },
  { title: "Book Eight", genre: "Science", publish: 2011, edition: 2016 },
  { title: "Book Nine", genre: "Non-Fiction", publish: 1981, edition: 1989 },
];

// Print all the books

books.filter(
    (book,ind) => {
        // console.log(`${ind+1}. ${book.title}`)
    }
)

// get all books of history

books.filter(
    (book) => {
        // if(book.genre === 'History') console.log(`book name: ${book.title}  genre: ${book.genre}`)
    }
)

// books published after 2000

// books.filter(
//     (book)=>{
//         // if(book.publish > 2000) console.log(book.title);
//     }
// )

// return 'History' books published in and after 1995

// let bk = books.filter((book)=>{ return book.publish >= 1995 && book.genre === 'History'})
// console.log(bk)

// same as above but dont use 'return'

// let bk = books.filter((book)=>(book.publish >= 1995 && book.genre === 'History'))

// or

// let bk = books.filter((book)=>book.publish >= 1995 && book.genre === 'History')

// console.log(bk)

// ####################### Maps #######################

// maps an operation to each element of the array and returns it in a new array

let b = [1,4,7,4,6,7]

// let c = b.map( (num)=>{return 10 + num})
// console.log(c) // [11, 14, 17, 14,16, 17, 10]

// Now lets look at map chaining

// first map add 2 two each element and the secound one multiplies every element of new array with 2
// let d = b.map((num)=>num+2).map((num)=>num*2)
// console.log(d);

// let q = b.map((num)=>num+2).map((num)=>num*2).filter((num)=>num>10)
// console.log(q)

// ####################### Reduce #######################

// reduces the whole array to a single value sum,diff,mul,div etc

// let ini = 0
// let sum = b.reduce( (ini,num)=>ini+num)
// let diff = b.reduce( (i,num)=>i-num,0)
// let mul = b.reduce( (iniM,num)=>iniM*num,1) // you can just give value for iniM in arguments
// console.log(sum, diff, mul);

// use case shopping cart bills

const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

let totalBill = shoppingCart.reduce((s, val)=> val.price + s,0)
console.log(`Your total Bill is: ${totalBill}`);
console.log(12999+5999+999+2999);