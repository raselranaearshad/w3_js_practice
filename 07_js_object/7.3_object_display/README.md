# JavaScript Display Objects
Displaying a JavaScript object will output `[object Object]`.
```js
document.write(objectName);
```
## How to Display JavaScript Objects?
* Displaying the Object Properties by name
* Displaying the Object Properties in a Loop
* Displaying the Object using Object.values()
* Displaying the Object using JSON.stringify()

### Displaying Object Properties
The properties of an object can be displayed as a string:
```js
const person = {
  name: "Alamin",
  age: 20,
  city: "London"
};
document.write(person["name"] + ", " + person["age"] + ", " + person["city"]);
```

### Displaying Properties in a Loop
The properties of an object can be collected in a loop:
```js
const userInfo = {
  name: "Rasel",
  age : 20,
  country: "Switzerland"
};
let show = "";
// Loop Over Object
for (let x in userInfo){
  show += userInfo[x] + " ";
};

```
> NOTE: We must use `userInfo[x]`. (Because `x` is the loop variable)

### Display Object Using Object.values()
`Object.values()` creates an array from the property values:
```js 
// Create an Object
const myObj = {
  name: "John",
  age: 30,
  city: "New York"
};
// Create an Array
const myArra = Object.value(myObj);
document.write(myArra);
```

### Object Display Using Object.entries()
`Object.entries()` makes it simple to use objects in loops:
```js
// Create an Object
const fruits = {Apple:200,Banana:300,Orange:250,Cherry:310};
let result = "";
// Create a loop over Object
for (let [fruit,amout] of Object.entries(fruits)) {
  result += fruit + ": " + amout + "<br>"
};
document.write(result);
```

### Display Object using JSON.stringify()
* JavaScript objects can be converted to a string with JSON method `JSON.stringify()`.
* `JSON.stringify()` is included in JavaScript and supported in all major browsers.
```js
const myCars = {BMW: 100, Ford: 152, Honda: 210};
// Creating Stringify()
let myString = JSON.stringify(myCars);
document.write(myString)
```
> NOTE: The result will be a string written in JSON notation: {"BMW":100,"Ford":152,"Honda":210}