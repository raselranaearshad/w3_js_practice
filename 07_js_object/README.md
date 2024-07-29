# JavaScript Object
* Objects are variable too. But objects can contain many values.
### Example:
```js
const car = {type:"Fiat", model:"500", color: "white"};
```
> NOTE: It is a common practice to declare object with `const` keyword.
## How to Define a JavaScript Object?
* Using an Object Literal
* Using the  `new` keyword
* Using an Object Constructor
### JavaScript Object Literal
An object literal is a list of `name:value` pairs inside curly braces `{}`.
```js
{firstName:"John", lastName:"Doe", age:50, eyeColor:"Blue"};
```
> NOTE: 
1. `name:value` pairs are also called `key:value` pairs.
2. `object literals` are also called `object initializers`.

### Accessing Object Properties
We can access object properties in two way:
```js
objectName.propertyName
```
```js
objectName["propertyName"]
```
## Why Objects are King in JavaScript?
* **Objects** are containers for `Properties` and `Methods`.
* **Properties** are named **Values**.
* **Methods** are **Functions** stored as **Properties**.
* **Properties** can be primitive values, functions, or even other objects.
### In JavaScript, almost "everything" is an object.
* Objects are objects
* Maths are Objects
* Functions are Objects
* Dates are Objects
* Arrays are Objects
* Maps are Objects
* Sets are Objects

## JavaScript Objects are Mutable
Objects are mutable: They are addressed by reference, not by value.

If person is an object, the following statement will not create a copy of person:
```js
const x = person;
```
* The object x is **not a copy** of person. The object **x is person**.
* The object x and the object person share the same memory address.
* Any changes to x will also change person:
> Example in code