# JavaScript Data Types
### JavaScript has 8 Datatypes
* String
* Number
* Boolean
* BigInt
* Undefined
* Null
* Symbol
* Object
> NOTE: A JavaScript variable can hold any type of data.
### JavaScript String
* A string is a series of characters like "John Doe".
* Strings are written with quotes. We can use single or double quotes.

Example:
```js
// Using double quotes:
let carName1 = "BMW M8";
```
```js
// Using single quotes:
let carName2 = 'Honda Civic';
```

### JavaScript Numbers
* All JavaScript numbers are stored as decimal numbers (floating point).
* Numbers can be written with, or without decimals:

Example:
```js
// with decimals:
let x = 34.36;
```
```js
// without decimals:
let y = 36;
```
### Exponential Notation
Extra large or extra small numbers can be written with scientific (exponential) notation:

Example:
```js
let x = 123e5;    // 12300000
let y = 123e-5;   // 0.00123
```

### JavaScript BigInt
* All JavaScript numbers are stored in a 64-bit floating-point format.
* JavaScript BigInt is a new datatype [ES2020](https://www.w3schools.com/js/js_2020.asp) that can be used to store integer values that are too big to be represented by a normal JavaScript Number.

Example:
```js
 let x = BigInt("123456789012345678901234567890"); 
```
### JavaScript Boolean
* Booleans can only have two values: `true` or `false`.
* Booleans are often used in conditional testing.

Example:
```js
let x = 5;
let y = 5;
let z = 6;
(x == y)  // Returns true
(x == z)  // Returns false
```
### JavaScript Array
* JavaScript arrays are written with `[]` square brackets.
* Array items are seprated by commas.
* Array indexes are zero-based, which means the first item is `[0]`, second is `[1]`, and so on.

Example:
```js
const carName = ["Honda", "Ford", "BMW"];
```
### JavaScript Object
* JavaScript objects are written with curly braces `{}`.
* Object properties are written as `name:value` pairs, separated by commas.

Example:
```js
const person = {firstName: "Rasel", age:50, eyeColor:"Blue"};
```
> The object **(person)** in the example above has 3 properties: firstName, age, and eyeColor.

### JavaScript Undefind
* In JavaScript, a variable without a value, has the value `undefined`. The type is also `undefined`.
* Any variable can be emptied, by setting the value to `undefined`. The type will also be `undefined`.

Example: 
```js 
let car; // Value is undefined, type is undefined 
```