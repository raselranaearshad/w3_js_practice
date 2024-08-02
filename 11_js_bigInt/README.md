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
## BigInt Hex, Octal and Binary
BigInt can also be written in hexadecimal, octal, or binary notation:
```js
let hex = 0x20000000000003n;
let oct = 0o400000000000000003n;
let bin = 0b100000000000000000000000000000000000000000000000000011n;
```
> NOTE : A `BigInt` can not have decimals.

## Minimum and Maximum Safe Integers
```js
let x = Number.MAX_SAFE_INTEGER;
```

## New Number Methods
ES6 also added 2 new methods to the Number object:

* Number.isInteger()
* Number.isSafeInteger()

```js
let x = Numer.isInteger(10);
let y = Number.isSafeInteger(12345678901234567890);
```