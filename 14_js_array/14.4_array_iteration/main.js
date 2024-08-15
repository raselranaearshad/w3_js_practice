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