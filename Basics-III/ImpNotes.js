// How does JavaScript execute code?

// ############### JavaScript Execution Context ###############

// -> When you run js code a 'Global Execution Context' is created and stored in 'this' variable
// -> for node 'this' -> {} and for window 'this'-> window object

// also look into,
//      Global Execution Context
//      Function Execution Context
//      Eval Execution context(opt)

// -> JS is single thread

// -> JS excutes your code in two phases

// -> Phase-1 : Memory creation phase
// Memory is allocated to all variables, functions etc

// -> Phase-2 : Execution phase
// where the actual execution happens

// -> lets look at the following example

// let a = 5
// let b = 10
// function sum(num1, num2){
//     total = num1 + num2
//     return total
// }
// res1 = sum(a,b)
// res2 = sum(2,5)

// -> a GEC is created containing our code

// -> Mem Creation Phase

// -> a is allocated mem and gets undefined. yes all variables get undefined
// -> b gets mem and undefined
// -> sum() get decleration. functions get their decleration
// -> res1 gets undefined
// -> res2 gets undefined

// -> Execution Phase

// -> a gets 5
// -> b gets 10
// -> sum() decleration is ignored, you'll understand
// -> sum() call encountered in res1

//      -> Function Execution Context is created

//      -> Mem Creation Phase(again)

//      -> var a gets undefined
//      -> var b gets undefined
//      -> var total gets undefined

//      -> Execution Phase

//      -> num1 gets 5
//      -> num1 gets 10
//      -> total gets 15

//-> res1 gets 15

// -> res2 gets the stuff same way as res1

// hopefullly you can understand the call stack in a much better way now
// when you look at global execution context 
