# JavaScript Function
* A JavaScript function is a block of code designed to perform a particular task.
* A JavaScript function is executed when "something" invokes it (calls it).

## Why Function?
1. With `function` we can reuse code.
2. We can write code that can be used many times.
3. You can use the same code with different arguments, to produce different results.

## JavaScript Function Syntax
1. A JavaScript function is defined with the `function` keyword, followed by a `name`, followed by parentheses `()`.
2. Function names can contain letters, digits, underscores, and dollar signs (same rules as variables).
3. The parentheses may include parameter names separated by commas:
**(parameter1, parameter2, ...)**
4. The code to be executed, by the function, is placed inside curly brackets: `{}`
5. Function parameters are listed inside the parentheses `()` in the function definition.
6. Function **arguments** are the **values** received by the function when it is called.
### Example:
```js
function name (parametar1, parametar2){
  // code to be executed
};
```
## Function Invocation
The code inside the function will executed when "something" **invokes** (called) the function:
* When an event occurs (when a user clicks a button)
* When it is invoked (called) from JavaScript code
* Automatically (self invoked)

## Function Return
* When JavaScript reaches a `return` statement, the function will stop executing.
* If the function was invoked from a statement, JavaScript will "return" to execute the code after the invoking statement.
* Functions often compute a return value. The return value is `returned` back to the `caller`