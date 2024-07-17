# JavaScript Let Variable
The let keyword was introduced in ES6 (2015).
Variables declared with ``` let ``` have **Block Scope**. 

Variables declared with ``` let ``` must be Declared before use. Variables declared with ``` let ``` cannot be Redeclared in the same scope.

## Block Scope
Before ES6 (2015), JavaScript did not have **Block Scope**.

JavaScript had **Global Scope** and **Function Scope**.

### Example:
Variables declared inside a `{ }` block cannot be accessed from outside the block:
``` js
{
  let x = 2;
}
// x can NOT be used here 
```
## Global Scope
Variables declared with the `var` always have **Global Scope**. Variables declared with the `var` keyword can NOT have **block scope:**

### Example:
Variables declared with `var` inside a `{ }` block can be accessed from outside the block:
``` js
{
  var x = 2;
}
// x Can be used here.
```

## Cannot be Redeclared

Variables defined with `let` **can not** be redeclared.

### Example:
With `let` you **can not** do this:
``` js 
let x = "John Deu";
let x = 2;
```
Variables defined with `var` **can** be redeclared.

With `var` you **can** do this:
``` js 
var x = "John Deu";
var x = 2;
```