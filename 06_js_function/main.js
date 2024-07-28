// Simple Function Rules.
function myFunction(p1,p2){
  // we can write our code here
};
myFunction();

// Function return
function fReturn (a,b) {
 // Function returns the product of a and b
  return a * b
};
 // Function is called, the return value will end up in result.
let result = fReturn(3,4);
document.write(result + "<br>");

// Function () Operator
function toPharenhait (f){
  return (5/9) * (f-32)
};
let value = "The temperature is" + toPharenhait(77) + "Celsius";
document.write(value);