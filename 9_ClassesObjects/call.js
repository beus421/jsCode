// lets look at call()

// when there is 'function B' within 'function A' 

function userName(name){
    this.name = name
    console.log('B ran');
}

function setUser(name, age, pass) {
    // userName(name)
    // now the 'this' of B will store the value of B not Global Execution Context
    userName.call(this,name)
    this.age = age
    this.pass = pass
    console.log('A ran');
}

let user = new setUser('Hammad', 10, 123)
console.log(user); 

// you are not getting the cuz the exection context of B
// is being discarded from callstack before it can send back the value
// the 'this' in B stores the value of global execution context => {}
// we'll solve this with call()

