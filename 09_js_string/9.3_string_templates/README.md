# Templates String
---
* Template Strings allow both single and double quotes inside a string
* Template Strings allow multiline strings.
* Template Strings allow variables in strings.
## Back-Tics Syntax
Template Strings use back-ticks `(``) `rather than the quotes `("")`to define a string.
```js
let x = `This is the example`;
```

## Quotes Inside Strings
**Template Strings** allow both single and double quotes inside a string.
```js
let text = `He's often called "Johnny"`; 
```

## Interpolation
**Template String** provide an easy way to **interpolate** variables and expressions into strings. It's called **string interpolation**.
```js
${...}  // This is the syntax
```

## Variable Substitutions
```js
let firstName = "John";
let lastName = "Doe";

let text = `Welcome ${firstName}, ${lastName}!`;
```
> NOTE: Automatic replacing of variables with real values is called string interpolation.