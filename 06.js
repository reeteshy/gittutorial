// Javascript functions

// Function declation and Regular functions

// function func1(){
//     console.log("Function declation and Regular functions")
// }

// func1()

// Function Expressions

// var func2 = function () {
//     console.log("This is the function expression")
// }

// func2()

// Arrow function 

// var func3 = () => {
//     console.log("This is the arrow funcrion example!")
// }

// func3();

// IEFE functions

// (function() {
//     console.log("Immidiate Invoked function expression is callled!");
//     /* */
//   })()

// Assynchronous function

// Closure function

// Functions for the array and Object operation

// For of loop

const obj1 = new Object();

obj1.firstName = "Reetesh";
obj1.lastName = "Yadav"
let arr1 = [1,2,3,4,5,6,7]

let forEachResult = arr1.forEach( (el, index) => {
    //  console.log(el*2);
    arr1[index] =  el*2;
})

console.log(forEachResult)

console.log("Foreach loop data are", arr1)
console.log("Type of Object is ", typeof obj1);
console.log("Object data are  ",obj1);