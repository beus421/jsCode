// Promise is an object
// accepts a callback
// it allows you to wait for something, if it happens then do task 1 else do task 2

// you dont have to store it in a variable
// call back has two parameters resolve and reject
let promiseOne = new Promise((resolve, reject)=>{

    // console.log('first promise') // wont run

    setTimeout(()=>{
        console.log('first promise') // will run
        resolve() // connects .then() with the promise
    },1000)

})

// if you create a promise it must be consumed,
// meaning tell what to do if it is resolved or rejected

promiseOne.then(()=>{
    console.log('Promise consumed!\n'); // wont run if resolve() is not used in the promise
})


// now lets look at promise thats not in a variable
// you can use then() with the promise itself

new Promise((resolve, reject)=>{
    setTimeout(()=>{
        console.log('Promise two');
        resolve()
    }, 1000)
}).then(()=>{
    console.log('Promise Two Consumed\n');
})


// retruning values?

let promiseThree = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        // you can return anything but I will return an object
        resolve({user:'Hammad', pass:'1234'})
    })
})

promiseThree.then((resolve)=>{
    console.log(resolve);
    console.log('Promise Three Consumed\n');
}
)


// using reject and .catch()

new Promise((resolve, reject)=>{
    
    setTimeout(()=>{
        
        // try changing the value and see the result
        let error = true
        if(!error){
            console.log('No error in Promise four')
            resolve()
        }else{
            console.log('Error in Promise four')
            reject()
        }

    },1000)
   
}).then(()=>{
    console.log('Promise Four Consumed');
    console.log('without error\n');
}).catch(()=>{
    console.log('Promise Four Consumed');
    console.log('with error\n');
})


// you can consume a promise without .then() .catch()
// use async function
// now youll have to use promise in a variable 

let promiseFive = new Promise((resolve, reject)=>{
    
    setTimeout(()=>{
        
        // try changing the value and see the result
        let error = true
        if(!error){
            console.log('No error in Promise Five')
            resolve({username: "javascript", password: "123"})
        }else{
            console.log('Error in Promise Five')
            reject('returned in catch')
        }
    },1000)
})

async function consumePromiseFive(){

    try {
        // await waits for something to be done
        let response = await promiseFive
        console.log(response);
        console.log('Promise Four Consumed');
        console.log('without error\n');
    } catch (error) {
        console.log(error);
        console.log('Promise Four Consumed');
        console.log('with error\n');
    }
}

consumePromiseFive()


// Now lets see a practical use of Promise with async by 'fetching' response form an error

async function getFromApi(){

    try {

        // fetch returns a promise
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        // console.log(response); // need to convert it into a json
        const data = await response.json() // await needed here to wait for converion
        // console.log(data[0].name); // now we are getting the data
        // lets print all the names
        for (const key in data) {
            if (Object.hasOwnProperty.call(data, key)) {
                console.log(`user ${Number(key)+1}. ${data[key].name}`);  
            }
        }
        console.log('\n');

    } catch (error) {
        console.log(error);
    }
}

getFromApi()

// or do it with promise 

fetch('https://api.github.com/users/beus421')
.then((resolve)=>{
    return resolve.json()
}).then((data)=>{
    console.log(data.login);
    console.log('\n');
}).catch((reject)=>{
    console.log(reject)
})