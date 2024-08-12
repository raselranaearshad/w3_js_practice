# JavaScript Array Methods
The length property returns the `length` (size) of an array.
```js
const fruits = ["Mango", "Orange", "Banana", "Apple"];
document.write(fruits.length + "<br>");
```
The `length` property provides an easy way to append a new element to an array.
```js
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits[fruits.length] = "Kiwi";
```
### JavaScript Array `toString()`
The JavaScript method `toString()` converts an array to a string of (comma separated) array values.
```js
const fruits = ["Mango", "Strawberry", "Banana"];
console.log(fruits.toString());
```
### Array `at()` method:
* The `at()` method returns an indexed element from an array.

* The `at()` method returns the same as `[]`.
```js
const fruits = ["Apple", "Banana", "Orange", "Kiwi"];
// Get the 2nd element of fruits using at()
console.log(fruits.at(1));
```
> NOTE : The `at()` method is supported in all modern browsers since March 2022

### Array `join()` method: 
The `join()` method also joins all array elements into a string.
```js
const hisFruits = ['Mango', 'Banana', 'Apple'];
document.write(hisFruits.join(" * ") + "<br>");
```

### Array `pop()` method:
The `pop()` method removes the last element from an array.
```js
const fruits = ['Mango', 'Banana', 'Apple'];
let x = fruits.pop();
console.log(x);
```

### Array `push()` method
The `push()` method adds a new element to an array (at the end).
```js
const myCars = ["Mitshubishi", "Honda"];
console.log(myCars.push("Honda"));
```
### Array `shift()` method
The `shift()` method removes the first array element and "shifts" all other elements to a lower index.
```js
const fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits.shift());
```

### JavaScript Array `unshift()`
The `unshift()` method adds a new element to an array (at the beginning), and "unshifts" older elements.
```js
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.unshift("Lemon");
```