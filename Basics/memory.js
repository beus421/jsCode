// 'Primitive Datatypes' are stored in 'stack' and as mentioned before they are 'call by value'

// 'Non-Primitive Datatypes' are stored in 'heap' and they are 'call by refrence'


// 'stack' and 'call by value' example,

// let a = 'value of a'
// let b = a

// console.log(a) // 'value of a'
// console.log(b) // 'value of a'

// b = 'value of b'

// console.log(a) // 'value of a' the value of orignal doesnt change since 'call by value' 
// console.log(b) // 'value of b'

// 'heap' and 'call by refrence' example,

// let a = {
//     'id': 123,
//     'name': 'Hammad'
// }
// console.log(`a: `)
// console.log(a)

// let b = a
// console.log(`b: `)
// console.log(b)

// b.name = 'Hamza'
// console.log(`b: `)
// console.log(b)

// console.log(`a: `)
// console.log(a) // even the original changed due to call by refrence