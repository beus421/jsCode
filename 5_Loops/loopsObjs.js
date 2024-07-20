//for in

const myObj = {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
}

for (const key in myObj) {
    if (Object.hasOwnProperty.call(myObj, key)) {
        const element = myObj[key];
        console.log(key); //keys
        console.log(element); // values
    }
}

// will work on arrays but not on map