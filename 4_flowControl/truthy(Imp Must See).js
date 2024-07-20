// very interesting and important
// makes writing conditionals very easy

// let user = 'Hammad' // run each to see the different results
// user = ''

// user ? console.log('truthy') : console.log('falsey');

// falsy values,
// '', BigInt 0n, false, -0, 0, null, Undefined, NaN

// truthy values
// '0', 'false', true, [], {}, function(){} yes empty function is a thing

// ++++++++++++++++ Nullish coalescing operator -> ?? (Imp) ++++++++++++++++

// relatively new operator
// allows us to use a backup value in-case you get a 'null' or 'undefined'
// Normally you get two types of returns from a database, that might include 'null', 'undefined'
// so to take care of that we use this '??'.

// let a = null ?? 21 
// let b = undefined ?? 313 ?? 2 // in this case it will get the first value
// console.log(b)