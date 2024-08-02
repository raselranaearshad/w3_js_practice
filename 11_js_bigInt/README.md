# JavaScript bigInt

JavaScript `BigInt` variables are used to store big integer values that are too big to be represented by a normal JavaScript `Number`.

### JavaScript Integer Accuracy
* JavaScript integers are only accurate up to 15 digits.
```js
let y = 9999999999999999;
```
> NOTE: In JavaScript, all numbers are stored in a 64-bit floating-point format (IEEE 754 standard).

## How to Create a BigInt
To create a BigInt, append `n` to the end of an integer or call `BigInt()`:
```JS
let x = 1234567890123456789012345n;
let y = BigInt(1234567890123456789012345)
```
## BigInt: A new JavaScript Datatype
The JavaScript `typeof` a `BigInt` is "bigint":
```JS
let x = BigInt(999999999999999);
let type = typeof x;
```
`BigInt` is the second numeric data type in JavaScript (after `Number`).

With BigInt the total number of supported data types in JavaScript is 8:
* String
* Number
* BigInt
* Boolean
* Undefiend
* Null
* Symbol
* Object

## BigInt Operators
Operators that can be used on a JavaScript `Number` can also be used on a `BigInt`.
```js
let x = 9007199254740995n;
let y = 9007199254740995n;
let z = x * y;
```

