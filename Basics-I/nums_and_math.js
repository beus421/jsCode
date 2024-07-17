// let a = 21
// console.log(a)

// // Explicitly defining the data type
// let b = new Number(32)
// console.log(b)

// // converting b to string, so you can use string methods on it
// let bStr = b.toString()
// console.log(bStr)

// // Number Methods
// console.log(b.toExponential(1))
// console.log(b.toFixed(2))
// b = 100000000
// console.log(b.toLocaleString()) //counts the number of zeros
// b = 2345
// console.log(b.toPrecision(3))
// b = 23234
// console.log(b.valueOf())

// +++++++++++++++++++++ Maths ++++++++++++++++++++++++

// console.log(Math)

// has a lot of methods but we will focus on random 

// console.log(Math.random()) // values b/w 0 - 1 
// console.log(Math.random()*10) // we can still get 0.11....
// console.log((Math.random()*10) + 1) // to avoid 0.11....
// console.log(Math.floor(Math.random()*10) + 1) // to avoid values after decimal point

// Formula for getting values b/w a cirtain ranges

const mi = 3;
const ma = 8;

console.log(Math.floor(Math.random() * (ma - mi + 1) + mi))
