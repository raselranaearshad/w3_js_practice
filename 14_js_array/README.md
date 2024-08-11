# JavaScript Array
An array is a special variable, which can hold more than one value.
```js
const myArray = ["Ford", "BMW", "Toyota"];
```
An array can hold many values under a single name, and you can access the values by referring to an index number.

## Creating an Array
```js
const array_name = [item1, item2, item3, ...];
```
### Using the JavaScript Keyword `new`
```js
const myCars = new Array ("Saab", "Toyota", "Volvo");
```
### Changing an Array Element 
```js
const cars = ["Saab", "Volvo", "BMW"];
cars[0] = "Opel";
```
### Converting an Array to a String
The JavaScript method `toString()` converts an array to a string of (comma separated) array values.
```js
const fruits = ["Apple", "Mango", "Banana", "Orange"];
console.log(fruits.toString());
```
### Accessing the Last Array Element
```js
const fruits = ["Mango", "Orange", "Banana"];
let fruit = fruits[fruits.length - 1];
console.log(fruit);
```
