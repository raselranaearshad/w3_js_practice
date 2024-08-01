let x = 3.14; // A number with decimals
let y = 5;  // A number without decimals

// Exponent Notation
let a = 234e5;
let b = 234e-6;
document.write(a + '<br>');
document.write(b + '<br>');

// Floating Precision
let A = 0.7 + 0.1;
document.write(A + "<br>");
/* To solve the problem above, it helps to multiply and divide */
let B = (0.7 * 10 + 0.1 * 10) / 10;
document.write(B + "<br>");

// Nan - Not A Number
let C = 100 / "Apple";
document.write(C + "<br>");
// isNan Example
let c = "Bilkiss" * 100;
document.write(isNaN(c) + "<br>");
// typeof NaN Example
let d = NaN;
document.write(typeof d + "<br>");

// Infinity Example
let D = -2 / 0;
document.write(D + "<br>");

// JavaScript Number Types
let myNumber = 32;
// Hexatrigesimal (base 36): w
document.write(myNumber.toString(36) + '<br>');
// Duotrigesimal (base 32): 10
document.write(myNumber.toString(32) + '<br>');
// Hexadecimal (base 16): 20
document.write(myNumber.toString(16) + '<br>');
// Duodecimal (base 12): 28
document.write(myNumber.toString(12) + '<br>');
// Decimal (base 10): 32
document.write(myNumber.toString(10) + '<br>');
// Octal (base 8): 40
document.write(myNumber.toString(8) + '<br>');
// Binary (base 2): 100000
document.write(myNumber.toString(2) + '<br>');