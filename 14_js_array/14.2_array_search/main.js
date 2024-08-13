// Array indexOf()
const fruits = ["Mango", "Banana", "Orange", "Apple", ];
document.write(fruits.indexOf("Orange") + "<br>");

// Array lastIndexOf()
const myFruits = ["Mango", "Banana", "Pineapple", "Strawberry", "Orange"];
document.write(myFruits.lastIndexOf("Orange") + 1 + "<br>");

// Array includes()
const bilFruits = ['Mango', 'Banana', 'Pineapple', 'Strawberry', 'Orange'];
document.write(bilFruits.includes("Banana") + "<br>");

// Array find()
const numbers = [1, 3, 5, 8, 12, 14, 25, 36];
let result = numbers.find(myFunction);
function myFunction(value) {
  return value > 25;
};
document.write(result + "<br>");