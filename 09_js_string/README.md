# JavaScript String
* Strings are for **storing text**
* Strings are written **with quotes`""`or `''`**
```js
let text = "John Doe";
```
## Template Strings
* Templates were introduced with ES6 (JavaScript 2016).
* Templates are strings enclosed in backticks (`This is a template string`).
* Templates allow single and double quotes inside a string.
```js
let text = `He's ofen called "Jony"`;
```
> Templates are not supported in Internet Explorer.
## String Length
To find the length of a string, use the built-in length property:
```js
let text = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let length = text.length;
```
## Escape Characters
Strings must be written within quotes, JavaScript will misunderstand this string:
```js
let text = "We are the so-called "Vikings" from the north.";
```
* To solve this problem, you can use an backslash escape character.
* The backslash escape character `\` turns special characters into string characters:

|Code|Result|Description|
|----|------|-----------|
|`\'`|`'`|Single quote|
|`\"`|`"`|Double quote|
|`\\`|`\`|Backslash|
### Example:
`\"` inserts a double quote in a string:
```js
let text = "We are the so-called \"Vikings\" from the north."; 
```
`\'` inserts a single quote in a string:
```js
let text= 'It\'s alright.';
```
`\\` inserts a backslash in a string:
```js
 let text = "The character \\ is called backslash.";
```
## JavaScript Strings as Objects
Strings can also be defined as objects with the keyword `new`
```js
let x = "John"
let y = new String ("Jony");
```
> Do not create Strings objects. The `new` keyword complicates the code and slows down execution speed.