// can you chage the value of Math.PI?
// no you cant, but why?
// Object.getOwnPropertyDescriptor()

let info = Object.getOwnPropertyDescriptor(Math, 'PI')
// console.log(info);

// now you know why value of pi cant be changed

let user = {
    name: 'Hammad',
    emal: 'h@gamil',
    pass: '123'
}

let userInfo = Object.getOwnPropertyDescriptor(user, 'name')
console.log(userInfo);
// lets try changing these values 

Object.defineProperty(user, 'name', {
    writable: false,
    // enumerable: false
})

console.log(Object.getOwnPropertyDescriptor(user, 'name'));

user.name = 'ali'
console.log(user);



