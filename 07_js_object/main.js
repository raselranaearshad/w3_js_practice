// Creating a JavaScript Object
const person = {
  firstName: "John",
  lastName: "Doe",
  age: 40,
  eyeColor: "Blue",
  height: "5 Feet 10",
  weight: "85 Kg"
};
document.write(person["eyeColor"] + "<br>");


/* 
This example creates an empty JavaScript object, and then adds 4 properties:
*/
const carInfo = {};
// Add Properties
carInfo.brandName = "BMW";
carInfo.model = "M8 Compitision";
carInfo.type = "Sports";
carInfo.ingine = "V8 Turbo";

document.write(carInfo.model + "<br>");


// Using new Object() keyword
const alamin = new Object();
// Add Properties
alamin.firstName = "Alamin";
alamin.lastName = "Islam";
alamin.age = 20;
alamin.eyeColor = "Black";
alamin.weight = "60 Kg";

document.write(alamin["weight"] + "<br>");


// JavaScript Object Methods
const user = {
  firstName: "Jame",
  lastName: "Abir",
  age: 30,
  height: "5 Feet 11",
  eyeColor: "Brown",
  // Creating a function inside object
  fullName: function () {
    return this.firstName + " " + this.lastName;
  }
};
document.write(user.fullName() + "<br>");


// JavaScript Objects are Mutable
/* Create an Object */
const userInfo = {
  firstName: "Rasel",
  lastName: "Ahmed",
  age: 20,
  eyeColor: "Brown",
  height: "5 Feet 8"
};
// Create a copy 
const x = userInfo;
// Change age in both
x.age = 22;
document.write(userInfo.age);