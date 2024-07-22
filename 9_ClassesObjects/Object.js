// In js every thing is an object
// is function an object aswell?
// short answer is yes, lets look at it in detail

function muliplyWith5(num) {
    res = num*5
    return res
}

// does muliplyWith5 have properties like an object?

muliplyWith5.power = 5
// console.log(muliplyWith5.power) // looks like it does

// can you add a custom method?

muliplyWith5.prototype.show = ()=>{
    console.log(res);
}
muliplyWith5.prototype.addOne = ()=>{
    res = res+1
    console.log(res);
}

// this is'nt working because the method is not connected with the fuction

// muliplyWith5(5).show() 

// do this by using 'new'

// new muliplyWith5(5).show()

// new muliplyWith5(5).addOne()
// new muliplyWith5(2).addOne()

function user(username, score){
    this.username = username
    this.score = score
}

user.prototype.show = function (){
    // 'this' garbs the vars in the current context
    console.log(`user: ${this.username}`);
    console.log(`score: ${this.score}`);
}
user.prototype.scoreInc = function (){
    this.score = this.score+1
}

let hammad = new user('Hammad', 21)
hammad.scoreInc()
// hammad.show()

let jake = new user('Jake', 10)
// jake.show()

// Now you understand that every datatype is an object even a function
// what if you want to create a universal method for everyone

Object.prototype.all = ()=>{
    console.log('Custom Universal Method');
}

str = 'sfsfaf'
str.all()
arr = [1,23,3]
str.all()
fun = () => {
    console.log('dsfasf');
}
fun.all()
