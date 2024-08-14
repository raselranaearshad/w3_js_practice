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
}) + "<br>");

// Find the lowest or highest array value:
const number = [40, 100, 1, 5, 25, 10, 65, 77];
const result = number.sort(function (a, b) {
  return a - b;
});
document.write(result[0] + "<br>");
document.write(result[result.length - 1] + "<br>");

// Using Math.min() on an Array
const myNum = [40, 100, 1, 5, 25, 10, 65, 77, 93];
function minValue(minNum) {
  return Math.min.apply(null, minNum)
};
document.write(minValue(myNum) + "<br>");

// Using Math.max() on an array:
const herNum = [40, 100, 1, 5, 25, 10, 65, 77, 93];
function maxValue(maxNum) {
  return Math.max.apply(null, maxNum);
};
document.write(maxValue(herNum) + "<br>");

// Find min Number using home made function()
const nayNum = [4, 11, 54, 23, 12, 2, 18, 48, 32, 31, 54];
function findMinNum (minNum) {
  let len = minNum.length;
  let min = Infinity;
  while (len--) {
    if (minNum[len] < min) {
      min = minNum[len]
    };
  }
  return min
};
document.write(findMinNum(nayNum) + "<br>");

// Find max Number using home made function()
const alaNum = [4, 11, 54, 23, 12, 2, 18, 48, 32, 31, 54];
function findMaxNum (maxNum){
  let len = maxNum.length;
  let max = -Infinity;
  while (len--) {
    if (maxNum[len] > max) {
      max = maxNum[len]
    };
  }
  return max
};
document.write(findMaxNum(alaNum) + "<br>");