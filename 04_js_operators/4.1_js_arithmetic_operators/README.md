# JavaScirpt Arithmetic Operator
Arithmetic operators perform arithmetic on numbers(literals or variables).

|Operator|Description|
|--------|-----------|
|+|Addition|
|-| Subtraction|
|*| Multiplication|
|**| Exponentiation(ES2016)|
|/| Division|
|%| Modulus (Remainder)|
|++| Increment|
|--| Decrement|

## Operators and Operands
The numbers (in an arithmetic operation) are called **Operands**.

The operation (to be perform between the two operands) is defiend by an **operator**.
### Example:
|Operand|Operator|Operand|
|-------|--------|-------|
|100|+|50|
---

>In arithmetic, the devision of two integers produces **quotient** and a **remainder**.

>In mathematics, the result of a **modulo operation** is the **remainder** of an arithmetic division.

## Operator Precedence
Operator precedence describes the order in which operations are performed in an arithmetic expression.
### Example:
```js
let x = 100 + 50 * 3;
```
>Is the result of example above the same as 150 * 3, or is it the same as 100 + 150?
* As in traditional school mathematics, the multiplication is done first.
* Multiplication ```*``` and division ```/``` have higher precedence than addition ```+``` and subtraction ```-```.