// let a = ['this ', 'is ', 'an ', 'array']
// console.log(a)

// Shallow Copy vs Deep Copy
// Shallow copy share the same refrence point, 
// bole to heap wala khata, change one the other also changes
// array is a Shallow Copy

// array important methods

// .push(7), .pop(), unshift(2), shift()
// .includes(7) -> returns True or False, .indexOf(8)

// const a = ['this ', 'is ', 'an ', 'array'];
// const b = a.join() // returns array and joins it into a string

// console.log(a)
// console.log(b)

// slice vs splice

// const a = [1,2,3,4,5,6,7,8,9]
// const b = a.slice(0,3) // takes a slice and returns it as a seprate array

// console.log('a',a)
// console.log('b',b)

// const c = a.splice(0,3) // takes a slice and returns it as a seprate array

// console.log('a',a) // takes a slice and returns it as a seprate array while changing the original array aswell
// console.log('c',c)

// merging two arrays

// let a = [1,2,3,4]
// let b = [-3, -2, -1 ,0]
// b.push(a) // will it join?

// console.log(b) // it pushed the whole array as a single element so yeah its wrong

// second method

// let c = b.concat(a)
// let c = b.concat(a.slice(0,2)) // Joins 2 arrays and returns a new one
// console.log(c)

// third/common method using spread op

// let a = [1,2,3,4]
// let b = [-3, -2, -1 ,0]

// let c = [...a, ...b]
// console.log('c', c)

// b.push(...a)
// console.log(b);

// suppose you have the following array,

// a = [1, 2 , 3, [4, 5, 6], 7, [8, 9, 10, [11, 12, 13]]]
// console.table(a)
// you wanna change it to 1D? thats easy,

// let b = a.flat(Infinity) // parameter takes how many layers you want to flat

// console.log(b);

// how to check if you 'hammad' is an array?

// console.log(Array.isArray('Hammad')); // its not, false

// if not then can you convert it into one?

// console.log(Array.from('Hammad')); // [ 'H', 'a', 'm', 'm', 'a', 'd' ], yes

// create an array of multiple values?

// let a = 10;
// let b = 20;
// let c = 30;

// console.log(Array.of(a,b,c)); // [ 10, 20, 30 ], Done!

// Summary,

// important methods of array

// push, pop, unshift, shift
// slice, splice
// concat, flat
// from, of

// and also the rest/spread operator(...)










