// JavaScript integers are only accurate up to 15 digits.
let x = 9999999999999999;
document.write(x + "<br>");

// How to Create a BigInt
let y = BigInt("999999999999999999");
document.write(y + "<br>");

// Or we can Create a BigInt using n
let bigNum = 123456789012345678901234567890n;
document.write(bigNum + "<br>");

// BigInt: A new JavaScript Datatype
let bigWhat = BigInt('999999999999999'); 
document.write(typeof bigWhat + "<br>");

// BigInt Multiplication Example
let A = 9007199254740995n;
let B = 9007199254740995n;
let C = A * B;
document.write(C + "<br>");

// BigInt Division Example: 
let a = 5n;
let b = Number(a) / 2;
document.write(b + "<br>")

// BigInt Hex, Octal and Binary
let hex = 0x20000000000003n;
let oct = 0o400000000000000003n;
let bin = 0b100000000000000000000000000000000000000000000000000011n;
document.write(hex + "<br>" + oct + "<br>" + bin + "<br>");

// Minimum and Maximum Safe Integers
let printMax = Number.MAX_SAFE_INTEGER;
let printMin = Number.MIN_SAFE_INTEGER;
document.write(printMax + "<br>" + printMin + "<br>");

// The Number.isInteger() Method
let rightNum = Number.isSafeInteger(10.5);
let wrongNum = Number.isInteger(10);
document.write(rightNum + "<br>" + wrongNum + "<br>");