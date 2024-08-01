# JavaScript Numbers
JavaScript has only one type of number. Numbers can be written with or without decimals.
```js
let x = 3.15;   // A number with decimal
let y = 8;  // A number without decimals
```
Extra large or extra small numbers can be written with scientific (exponent) notation:
```js
let x = 123e5;  // 12300000
let y = 123e-5; // 0.00123
```
## JavaScript Numbers are Always 64-bit Floating Point
JavaScript numbers are always stored as double precision floating point numbers, following the international IEEE 754 standard.

This format stores numbers in 64 bits, where the number (the fraction) is stored in bits 0 to 51, the exponent in bits 52 to 62, and the sign in bit 63:

|Value (aka Fraction/Mantissa)	|Exponent	|Sign|
|-------------------------------|---------|----|
|52 bits (0 - 51) |11 bits (52 - 62)|1 bit (63)|

## Integer Precision
* Integers (numbers without a period or exponent notation) are accurate up to 15 digits.
* The maximum number of decimals is 17.
```js
let x = 999999999999999;   // x will be 999999999999999
let y = 9999999999999999;  // y will be 10000000000000000
```
## Floating Precision
Floating point arithmetic is not always 100% accurate:
```js
let x = 0.2 + 0.1;
```
To solve the problem above, it helps to multiply and divide:
```js
let x = (0.2 * 10 + 0.1 * 10) / 10;
```
> NOTE: The JavaScript interpreter works from left to right.
## NaN - Not a Number
NaN is a JavaScript reserved word indicating that a number is not a legal number.
```js
let x = 100 / "Apple";
```
> NOTE: However, if the string is numeric, the result will be a number.

`NaN` is a number: `typeof` NaN returns `number`:
```js
typeof NaN;
```
## Infinity
`Infinity` (or `-Infinity`) is the value JavaScript will return if you calculate a number outside the largest possible number.
```js
let x = 2 / 0;   // Return Infinity.
```
> NOTE: Infinity is a number: typeof Infinity returns number.

## Hexadecimal
* JavaScript interprets numeric constants as hexadecimal if they are preceded by 0x.
```js
let x = 0xFF;   // Output will be 255
```
> NOTE : Never write a number with a leading zero (like 07).
Some JavaScript versions interpret numbers as octal if they are written with a leading zero.

Hexadecimal is base `16`. Decimal is base `10`. Octal is base `8`. Binary is base `2`.

## JavaScript Numbers as Objects
Normally JavaScript numbers are primitive values created from literals.

But numbers can also be defined as objects with the keyword `new`:
```js
let x = new Number (15);
```
> NOTE : Do not create Number objects.

