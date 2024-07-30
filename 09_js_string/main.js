let carName1 = 'BMW M8'; // Single quotes
let carName2 = "BMW M8"; // Double quotes

/* Template String */
let text = `He's ofen called "Jony"`;
document.write(text + "<br>");

// String Length
let character = 'ABCDEFG HIJKLMNOPQ RSTUVWXYZ';
let length = character.length;
document.write(length + "<br>");

// Escape Characters
let txt = "We are the so-called \"Vikings\" from the north.";
document.write(txt + "<br>");

// JavaScript Strings as Objects
let x = "John";
let y = new String("John");
let z = x === y;
document.write(z)