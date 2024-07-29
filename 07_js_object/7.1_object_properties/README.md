# JavaScript Object Properties
* An Object is an Unordered Collection of Properties.
* Properties are the most important part of JavaScript Object.
* Properties can be changed, added, deleted, and some are read only.

## Accessing JavaScript Properties
The syntax for accessing the property of an object is:
```js 
// objectName.property
let age = person.age;
```
or
```js
// objectName["propertyName"]
let name = person["firstName"];
```
or
```js
// objectName[Expression]
let age = person[x];
```
## Adding New Properties
You can add new properties to an existing object by simply giving it a value:
```js
person.nationality = "Bangladeshi"
```
## Deleting Properties
The `delete` keyword deletes a property from an object:
```js
delete objectName.propertyName;
or 
delete objectName["propertyName"]
```
## JavaScript Nested Objects
Property values in an object can be other objects:
```js
const myObj = {
  name: "John",
  age: 30,
  // Define a new object inside an object.
  myCar : {
    brand: "BMW",
    model: "M8 Compitision",
    engine: "v12"
  };
};
```
You can access nested objects using the dot notation or the bracket notation:
```js 
myObj.myCar.model;
```
or 
```js
myObj.myCar["engine"];
```
or 
```js
myObj["myCar"]["brand"];
```