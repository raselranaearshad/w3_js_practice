# JavaScript Array Search
The `indexOf()` method searches an array for an element value and returns its position.
### JavaScript Array `indexOf()`
```js
const fruits = ["Mango", "Banana", "Orange", "Apple", ];
document.write(fruits.indexOf("Orange") + "<br>");
```

### JavaScript Array `lastIndexOf()`
```js
const myFruits = ["Banana", "Pineapple", "Strawberry", "Orange"];
document.write(myFruits.lastIndexOf("Orange") + 1 + "<br>");
```
### JavaScript Array `includes()`
This allows us to check if an element is present in an array (including `NaN`, unlike `indexOf`).
```js
const fruits = ["Apple", "Orange", "Apple", "Mango", "Orange"];
fruits.includes("Apple");
```

### JavaScript Array find()
The `find()` method returns the value of the first array element that passes a test function.
```js
const numbers = [1, 3, 5, 8, 12, 14, 25, 36];
let result = numbers.find(myFunction);
function myFunction(value, index, arry) {
  return value > 25;
};
console.log(result);
```