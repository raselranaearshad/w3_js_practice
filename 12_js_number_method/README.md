# JavaScript Number Methods

These number methods can be used on all JavaScript numbers.

|Method	| Description|
|-------|------------|
|toString()|Returns a number as a string|
|toExponential()|Returns a number written in exponential notation|
|toFixed()|Returns a number written with a number of decimals|
|toPrecision()|Returns a number written with a specified length|
|valueOf()| Returns a number as a number|

### The toString() Method
The `toString()` method returns a number as a string.

```js
let x = 123;
console.log(x.toString());
```
### The toExponential() Method
`toExponential()` returns a string, with a number rounded and written using exponential notation.

```js
let x = 5.689;
console.log(x.toExponential(4));
```

### The toFixed() Method
`toFixed()` returns a string, with the number written with a specified number of decimals.

```js
let x = 9.489;
console.log(x.toFixed(2));
```
> NOTE: `toFixed(2)` is perfect for working with money.

### The toPrecision() Method
`toPrecision()` returns a string, with a number written with a specified length.
```js
let x = 5.369;
console.log(x.toPrecision(4));
```

### The valueOf() Method
`valueOf()` returns a number as a number.
```js
let x = 123;
console.log(x.valueOf());
```

> NOTE: All JavaScript data types have a `valueOf()` and a `toString()` method.

## Converting Variables to Numbers
There are 3 JavaScript methods that can be used to convert a variable to a number.

|Method|Description|
|------|-----------|
|Number()|Returns a number converted from its argument.|
|parseFloat()|Parses its argument and returns a floating point number|
|parseInt()|Parses its argument and returns a whole number|

### The Number() Method

The Number() method can be used to convert JavaScript variables to numbers.
```js
let x = Number("10.5");
```
> **NOTE** : If the number cannot be converted, `NaN` (Not a Number) is returned.

### The Number() Method Used on Dates
The `Date()` method returns the number of milliseconds since 1.1.1970.
```js
let x = new Date("2004-10-20");
```
### The parseInt() Method
`parseInt()` parses a string and returns a whole number. Spaces are allowed. Only the first number is returned.
```js
let x = parseInt("10 years");
```
### The parseFloat() Method
`parseFloat()` parses a string and returns a number. Spaces are allowed. Only the first number is returned.
```js
let x = parseFloat("10.33");
```