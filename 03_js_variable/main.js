// Variables are Containers for Storing Data.

/* JavaScript Variables can be declared in 4 ways: 
  1. Automatically
  2. Using var
  3. Using let
  4. Using const
*/

// This is a example of Automatically varibale. They are automatically declared.
  x = 5;
  y = 6;
  z = x + y
  document.write(z + "<br>");
/* Note: It is considered good programming practice to always declare variables before use. */

// This is a example of using let variable.
let a = 10;
let b = 5;
let c = a * b;
document.write(c + "<br>")

// This is a example of using const varibale.
const X = 15;
const Y = 6;
const Z = X + Y;
document.write(Z + "<br>");

// This is a mixed example of using const & let variable.
const price1 = 5;
/* The two variables 'price1' & 'price2' are declared with the const variable.
    These are constant values and cannot be changed. */
const price2 = 10;
let total = price1 + price2;
/* The variable total is declared with the let varibale.
    The value "total" can be changed. */
document.write(total + '$');