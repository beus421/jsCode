// 'this' is facination
// same concept as c++ refers to 'current context'

// console.log(this) // returns an empty object in node

// but in browser it will return 'window' -->
// Window {0: Window, 1: Window, window: Window, self: Window, document: document,
// name: '', location: Location, …}

// we know 'this' works in objects lets try it in function
// function a(){
//     username = 'Hammad'
//     // console.log(this)
//     console.log(this.username) // surprisingly works
// }
// a()

let a = () => {
  username = "Hammad";
  // console.log(this) // {}
  // console.log(this.username) // undefined
};
a();

// explicit return, actually writing return keyword
// let sum = (a,b) =>{
//     return a + b
// }
// console.log(sum(2,3))


// Implicit return, automatically retuns
// let sum = (a,b) => a + b // same as above
// console.log(sum(2,3))

// let sum = (a, b) => (a + b); // this syntax is common in react
// console.log(sum(2, 3));

// this example will help you understand the '()' more
// let b = () => {a:1,c:2}; // returnig an object, now you need '()'
// console.log(b());

// let b = () => ({a:1,c:2}); // returnig an object
// console.log(b());
