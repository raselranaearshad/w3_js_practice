# JavaScript Number Properties
	
|Property|Description|
|--------|-----------|
|EPSILON|The difference between 1 and the smallest number > 1.|
|MAX_VALUE|The largest number possible in JavaScript
|
|MIN_VALUE	|The smallest number possible in JavaScript
|
|MAX_SAFE_INTEGER	|The maximum safe integer (253 - 1)|
|MIN_SAFE_INTEGER|The minimum safe integer -(253 - 1)|
|POSITIVE_INFINITY|Infinity (returned on overflow)|
|NEGATIVE_INFINITY|Negative infinity (returned on overflow)|

### JavaScript EPSILON
`Number.EPSILON` is the difference between the smallest floating point number greater than 1 and 1.

```js
console.log(Number.EPSILON);
```
### JavaScript MAX_VALUE

`Number.MAX_VALUE` is a constant representing the largest possible number in JavaScript.

```JS
console.log(Number.MAX_VALUE);
```
> **NOTE :** Number Properties Cannot be Used on Variables.

### JavaScript MIN_VALUE
Number.MIN_VALUE is a constant representing the lowest possible number in JavaScript.

```js
console.log(Number.MIN_VALUE);
```

### JavaScript MAX_SAFE_INTEGER
`Number.MAX_SAFE_INTEGER` represents the maximum safe integer in JavaScript.

`Number.MAX_SAFE_INTEGER` is **(253 - 1).**
```js
console.log(Number.MAX_SAFE_INTEGER);
```

### JavaScript MIN_SAFE_INTEGER
`Number.MIN_SAFE_INTEGER` represents the minimum safe integer in JavaScript.

`Number.MIN_SAFE_INTEGER` is -(253 - 1).
```js
console.log(Number.MIN_SAFE_INTEGER);
```
> **NOTE :** `MAX_SAFE_INTEGER` and `MIN_SAFE_INTEGER` are ES6 features.

### JavaScript POSITIVE_INFINITY
`POSITIVE_INFINITY` is returned on overflow:
```js
console.log(Number.POSITIVE_INFINITY);
```

### JavaScript NEGATIVE_INFINITY
```js
console.log(Number.NEGATIVE_INFINITY);
```