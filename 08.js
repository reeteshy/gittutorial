// Creating an object

const testObj = new Object();

testObj.firstName = "Reetesh";
testObj.lastName = "Yadav"

testObj.fullName = function () {
    return this.firstName + " " + this.lastName;
}

console.log(typeof testObj);
console.log("Created Object is ", testObj);

// Object cloning

// Using Assign methode
const newTestObj = Object.assign(testObj, {designation : "Doveloper"})
console.log("Cloned Object of Test Object ", newTestObj )

// Using spread Opertaor
const spreadTestObj = {...testObj, age : "27"}
console.log("Spread cloned Object is ", spreadTestObj)


// For create millions of users

function createUser(firstName, lastName){
    const testObj = new Object();
    testObj.userFirstName = firstName;
    testObj.userlastName = lastName;
    testObj.userFullName = function () {
        return this.userFirstName + " " + this.userlastName;
    }
    testObj.singingSong = function () {
        console.log("La la la la...");
    }
    return testObj;
}

user1 = createUser("Reetesh", "Yadav")
console.log("First User ", user1.userFullName())

// Suppose we need to create multiple functions 

