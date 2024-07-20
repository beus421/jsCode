// for of

const a = [1,3,4,7,8,2]

for (const i of a) { // stores each element of 'a' in 'i'
        // console.log(i);
}

// Maps
// another datatype similar to an object
// only differnce is that it stores 
// unique values(simplified version)

const m = new Map()
m.set('pk','Pakistan')
m.set('uk','United Kingdom')
m.set('au','Australia')
m.set('au','Australia')

// console.log(m); // notice the reentries dont show up

// prints each key value pair in a single bracket
for (const key of m) {
    // console.log(key);
}

// but you want to seprate each value, use destructring
for (const [key,val] of m) {
    // console.log(key,'-',val);
}

// for of wont work on objects

// for each

const b = [2,3,5,7,9,1]

// accepts a 'call back function'
// A 'CBF' doesnt have a name
// b.forEach( (item, index, arr) => {console.log(item, ' ', index, ' ',arr );}) 

// You will encouter the following situation alot
// [{},{},{},{},{}]

const c = [
    {
        a: 1,
        b: 2,
        c: 3
    },
    {
        d: 4,
        e: 5,
        f: 6
    },
    {
        g: 7,
        h: 8,
        i: 9
    }
]

c.forEach(
    (val) =>{
        // console.log(val); // prints each object
    }
)

c.forEach(
    (val) =>{
        for (const key in val) {
                console.log(`key: ${key}, value: ${val[key]}`); //now you get keys and values
        }
    }
)
