# Array Iteration Methods
---
### JavaScript Array forEach()
The `forEach()` method calls a function (a callback function) once for each array element.
```js
const numbers = [12, 21, 32, 54, 56, 23]
function myFunction (value, index, array){
  console.log(value);
  console.log(index);
  console.log(array);
};
numbers.forEach(myFunction);
```
### JavaScript Array map()
* The `map()` method creates a new array by performing a function on each array element.

* The `map()` method does not execute the function for array elements without values.

* The `map()` method does not change the original array.
```js
const numbers = [12, 21, 32, 54, 56, 23]
function myFunction (value){
  return value * 2;
}
const newArray = numbers.map(myFunction);
console.log(newArray);
```