// Immediatly invoked function expression Or IIFE

// Why use iife?

// Bear with me for a sec, two reasons :-
// 1 . You want the function to immediatly run after the file runs,
// e.x. connecting to a database right after the file runs
// 2 . Some times the variables in our global scope mess with our function
// to avoid that we create our own scope using IIFE -> memorize it for interview

// What does IIFE look like?

// normal function and function call

function hello(){ console.log('HELLO G')}
hello(); // remove this ; and youll get an error

// IIFE and call

(function yello(){ console.log('YELLO G')})(); // Named IIFE

// notice the first '()' is for decleration and the secound is for call
// also its important to place ; at the end of the function

// arrow function in iife and accepting arguments

((name)=>{console.log(`Arrow here ${name}`)})('Hammad'); // Nameless IIFE