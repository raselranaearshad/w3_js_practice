# JavaScript Const
* The `const` keyword was introduced in ES6 (2015)
* Variables defined with `const` cannot be **Redeclared**.
* Variable defiend with `const` can't be **Reassigned**.
* Variable defiend with `const` have **Block Scope**.

## When to use JavaScript const?
Always declare a variable with `const` when you know that **the value should not be changed.**

Use `const` when you declare:
* A new Array
* A new Object
* A new Function
* A new RegExp

## Constant Objects and Arrays
The keyword `const` is a little misleading.

It does not define a constant value. It defines a constant reference to a value.

Because of this you can NOT:
* Reassign a constant value
* Reassign a constant array
* Reassign a constant object

But you CAN:
* Change the elements of constant array.
* Change the properties of constant object.

You can NOT reassign the array:
```javascript
const cars = ["Saab", "Volvo", "BMW"];

cars = ["Toyota", "Volvo", "Audi"];  // ERROR 
```
You can NOT reassign the object:
```javascript
const car = {type: "Fiat", model: "500", color: "white"};
 car = {type:"Volvo", model:"EX60", color:"red"};    // ERROR
 ```
