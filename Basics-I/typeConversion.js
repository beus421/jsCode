// let score = 33;

// console.log(typeof score); // number
// console.log(typeof(score)); // number

// score = '33';

// console.log(typeof(score)); // string

// let scrInNum = Number(score);

// console.log(typeof(scrInNum)); // number
// console.log(scrInNum); // 33

// score = 'ac33d';
// scrInNum = Number(score);

// console.log(typeof(scrInNum)); // number
// console.log(scrInNum); // NaN(Not a number)

// Important thing to note is that JavaScript will convert the value wether its valid or not
// but once you output that value you'll realize the issue..

// ******************************* Some weird Operations *******************************

console.log('a' + 'b') // => ab
console.log(1 + '2') // => 12 
console.log(typeof( 1 + '2')) // => string
console.log('1' + 2) // => 12
console.log(typeof( '1' + 2)) // => string
console.log('1' + 2 + 2) // => 122 => string
console.log( 1 + 2 + '2' ) // => 3 + '2' => 32 => string 
console.log(true) // true
console.log(+true) // 1
console.log(-true) // -1
console.log(+'') // 0
console.log(-'') // -0 ---> what????





