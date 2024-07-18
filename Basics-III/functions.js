// simple function

// function sayMyName() {
//   console.log("Walter White!");
// }

// sayMyName();

// function with arguments/parameters
// and returning value

// function sum(a, b) {
//   console.log(a + b);
//   return a + b;
// }

// a = sum(1, 2);
// console.log(`a: ${a}`);

// function greet(u=ali) {
  //   if(u === undefined){
  //     console.log('please enter a value');
  //     return
  //   }

  //   if (!u) {
  //     console.log("please enter a value");
  //     return;
  //   }
//   return `welcome! ${u}`;
// }

// console.log(greet());

// suppose you dont know how many args you will recieve
// then use ... rest operator

// function sum(...val){
//     let sum = Number()
//     for(i in val){
//         console.log(`sum: ${sum} i: ${i}`);
//         sum += val[i]
//     }
//     console.log(sum);
// }
// sum(1,2,1,2)

// Passing object to function
// const user = {
//     name: 'Hammad',
//     age: 24
// }

// function greetUser(user){
//     console.log(`hello ${user.name} how are you`);
// }

// greetUser(user)

// Passing array to function
// const arr = [200, 100, 23, 90]

// function getSecoundVal(arr){
//     console.log(`secound element is -> ${arr[1]}`);
// }

// getSecoundVal(arr)

//##################### Interesting #######################

// you can call a function before its decleration
console.log(addOne(3));

// this is a function
function addOne(num){
    return num + 1
}

// expression cant be called called before decleraion
console.log(addTwo(4));

// this is also a function
// also know as an expression
addTwo = function(num){
    return num + 2
}
