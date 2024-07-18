// Singleton
// If you create an object using a constructor, its a singleton
// if you make it using something else(literal) then its not

// Singleton
// Object.create()

// Object Litrel
// const user = {
//     name: 'Hammad', // mind you 'name' is considered a string by default
//     age: 24
// }

// console.log(user['name']); // Hammad

// use a 'symbol' as a key(asked in interviews)

// const mySym = Symbol();

// const user = {
//   mySym: "ddffsd",// this is wrong
//   [mySym]: "ddffsd", // correct way
//   name: "Hammad", // mind you 'name' is considered a string by default
//   age: 24,
// };

// console.log(user);

// adding a new key-value pair
// user.hair = 'Black'

// updating keys
// user.hair = 'Brown'

// stoping any further changes
// Object.freeze(user)
// user.hair = 'Yellow'

// console.log(user);

// using function in objects

// user.greeting = function(){
//     console.log(`Hello, ${this.name}`)
// }

// console.log(user['greeting']) // notice its refrencing the function but not calling it
// console.log(user.greeting) // notice its also refrencing the function but not calling it
// console.log(user.greeting()) // now its being called
// user.greeting()// you can also call it like this

// Joining Objects

// let A = {a:1, b:2}
// let B = {c:3, d:4}

// Wrong Way
// let C = A + B
// let C = {A + B}

// Right Way
// let C = Object.assign({}, A, B) 
// let C = {...A, ...B}

// console.log(C)

// Nested Objects

// let user = {
//     fullName:{
//         firstNames:{
//             first: 'Hammad',
//             middle: ''
//         },
//         lastName: 'Habib'
//     },
//     age: 24
// }

// console.log(user);
// console.log(user.fullName.firstNames.first);

// Now you will mostly get array of obects from the database
// let db = [
//     {a:1,b:2},
//     {a:3,b:4},
//     {a:5,b:6}
// ]

// console.log(db[0].a);

// Some important methods
// let user = {
//     a:1,
//     b:2,
//     c:3
// }

// to get all the keys
// console.log(Object.keys(user)); // [ 'a', 'b', 'c' ]

// to get all the values
// console.log(Object.values(user)); // [ 1, 2, 3 ]

// to get all the key-values in form of arrays
// console.log(Object.entries(user)); // [ [ 'a', 1 ], [ 'b', 2 ], [ 'c', 3 ] ]

// checking if a specific property is present in the object
// console.log(user.hasOwnProperty('a')); // true

// Object Destructuring

// its just another way to access values of an object
// let user = {
//     fullnameOfUser:'Hammad Habib',
//     b:2,
//     c:3
// }

// this is one way of accessing values but suppose you have to do this 10 times?
// console.log(user.fullnameOfUser)

// you can do this ->
// const {fullnameOfUser} = user
// console.log(fullnameOfUser);

//think the name is too long? lets give it a nickname
// const {fullnameOfUser: fname} = user
// console.log(fname);

// API introduction

// What is an API?

// Imagine you go to a resturant and order a dish by telling it to the waiter
// now you dont have to worry about how that dish is prepared or how it gets to you
// its the waiters responsibility, waiter === API
// you fetch from an api and get a file as you will see below.

// What does an API look like?

// {
//     "message": "Not Found",
//     "documentation_url": "https://docs.github.com/rest",
//     "status": "404"
// }

// Looks similar to an object does'nt it? its called a json file
// we store it in an object and then play with its values
// you might also get something like,

// [
//     {},
//     {}, an array of objects
//     {}
// ]

// some times json might look really confusing
// so to make things easier just copy it and paste it in a json formatter
// it will make your life much easier


