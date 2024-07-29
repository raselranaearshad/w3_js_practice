# JavaScript Object Methods
Object **methods** are actions that can be performed on objects.

A method is a **function definition** stored as a property value.
### Example:
```js
const userInfo = {
  firstName: "Zafor",
  lastName: "Iqbal",
  age: 32,
  fullName: function (){
    return this.firstName + " " + this.lastName;
  }
};
```
* In the example above, this refers to the `userInfo` object.
* `this.firstName` means the `firstName` property of `userInfo`.
* `this.lastName` means the `lastName` property of `userInfo`.

## Accessing Object Methods
You access an object method with the following syntax:
```js
objectName.methodeName();
```
If you call the **fullName property** with `()`, it will execute as a function:
```js
name = person.fullName();
```
If you access the **fullName property** without `()`, it will return the function definition:
```js
name = person.fullName;
```
> NOTE: Don't use it.
---
## Adding a Method to an Object
Adding a new method to an object is easy: 
```js
person.name = function () {
  return this.firstName + " " + this.lastName;
};
```
## Using JavaScript Methods
This example uses the JavaScript `toUpperCase()` method to convert a text to uppercase:
```js
person.name = function () {
  return (this.firstName + " " + this.lastName).toUpperCase();
};
```