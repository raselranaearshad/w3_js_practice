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

### Looping Array Elements
One way to loop through an array, is using a `for` loop.
```js
const jnFruits = ["Apple", "Strawberry", "Mango", "Banana"];
let jnLen = jnFruits.length;
for (let x = 0; x < jnLen; x++){
  console.log(jnLen[x])
};
```
You can also use the `Array.forEach()` function.
```js
const bilCars = ['Ford', 'BMW', 'Mitshubishi', 'Honda'];
bilCars.forEach(myFunction);
function myFunction(value) {
  document.write(value + "<br>")
};
```

### Adding Array Elements
The easiest way to add a new element to an array is using the `push()` method.
```js
const fruits = ["Banana", "Orange", "Apple"];
fruits.push("Lemon");
```

## The Difference Between Arrays and Objects
* In JavaScript, arrays use **numbered indexes**.  
* In JavaScript, objects use **named indexes**.

### When to Use Arrays. When to use Objects.
* JavaScript does not support associative arrays.
* You should use `objects` when you want the element names to be strings (text).
* You should use `arrays` when you want the element names to be numbers.
