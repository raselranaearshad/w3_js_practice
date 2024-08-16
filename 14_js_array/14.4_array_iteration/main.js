// array forEach() method:
const myNumers = [12, 21, 32, 54, 56, 23];
function reFunction(value, index) {
  document.write(value + "<br>");
  document.write(index + "<br>");
}
document.write(myNumers.forEach(reFunction) + "<br>");

// array map() method
const numbers = [2, 3, 25, 54, 12, 21, 32, 54, 56, 23];
function myFunction(value) {
  return value * 2;
};
const newArray = numbers.map(myFunction);
document.write(newArray + "<br>");
document.write(numbers + "<br>");

// Array flatMap() method: 
const myArray = [1, 2, 3, 4, 5];
const newArra = myArray.flatMap(x => [x, x * 5]);
document.write(newArra + "<br>");

// Array filter() method:
const myNum = [45, 4, 9, 16, 25];
function overFunction(value, index, array) {
  return value > 18;
};
const over18 = myNum.filter(overFunction);
document.write(over18 + "<br>");

// Array reduce() method:
const herNum = [45, 5, 9, 16, 25];
function totalNum(total, value, index, array) {
  return total + value;
};
document.write(herNum.reduce(totalNum) + "<br>");

// Array reduceRight() method:
const herNumbers = [45, 4, 9, 16, 25];
function herFunction(total, value) {
  return total + value
};
let herTotal = herNumbers.reduceRight(herFunction);
document.write(herTotal + "<br>");