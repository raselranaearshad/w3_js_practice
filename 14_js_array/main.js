// JavaScript Array 
const myArray = ["Ford", "BMW", "Toyota", "Tesla"];
document.write(myArray[1] + "<br>");
console.log(typeof myArray);

// Define array using the new keyword
const myCars = new Array("Saab", "Subbu", "Cuppu");
document.write(myCars[2] + "<br>");
console.log(typeof myCars);

// Changing an Array Element
const herCars = ["Saab", "Volvo", "BMW", "Tesla"];
herCars[1] = "Ford";
document.write(herCars[1] + "<br>");

// Converting an Array to a String
const fruits = ["Banana", "Orange", "Apple", "Mango"];
document.write(fruits.toString() + "<br>");

// Accessing the Last Array Element
const fruitss = ["Banana", "Mango", "Apple", "Strawberry"];
let singleFruit = fruitss[fruitss.length - 1];
document.write(singleFruit + "<br>");

// Looping Array Elements
const jnnFruits = ["Jackfruit", "Strawberry", "Mango", "Orange"];
let jnLenn = jnnFruits.length;
for (let i = 0; i < jnLenn; i++) {
  document.write(jnnFruits[i] + "<br>");
};