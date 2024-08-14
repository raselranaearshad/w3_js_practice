// Array sort() method
const fruits = ["Mango", "Apple", "Banana", "Kiwi"];
document.write(fruits.sort() + "<br>");

// Array reverse() method:
const fruit = ['Mango', 'Apple', 'Banana', 'Kiwi', 'Strawberry'];
document.write(fruit.reverse() + "<br>");

// Array toSorted() method:
const myFruits = ['Mango', 'Apple', 'Banana', 'Kiwi', 'Strawberry'];
document.write(myFruits.toSorted() + "<br>");

// Array toReversed() method: 
const months = ["Jan", "Feb", "Mar", "Apr", "May"];
const reverse = months.toReversed();
document.write(reverse + "<br>");

// Array Numeric sort:
const numbers = [40, 100, 1, 5, 25, 10, 65, 77, 93];
document.write(numbers.sort(function (a, b) {
  return a - b;
}));