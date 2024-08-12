// JavaScript Array length property
const fruits = ["Mango", "Orange", "Banana", "Apple"];
document.write(fruits.length + "<br>");

// JavaScript toString() method
const myFruits = ["Mango", "Strawberry", "Banana", "Apple"];
document.write(myFruits.toString() + "<br>");

// JavaScript at() method
const herFruits = ['Mango', 'Strawberry', 'Banana', 'Apple'];
document.write(herFruits.at(1) + "<br>");

// JavaScript join() method
const hisFruits = ['Mango', 'Banana', 'Apple'];
document.write(hisFruits.join(" * ") + "<br>");

// JavaScript pop() method
const favCars = ["Ford", "BMW", "Range Rover"];
let x = favCars.pop();
document.write(x + "<br>" + favCars + "<br>");

// JavaScript push() method
const myCars = ["Mitshubishi", "Honda"];
document.write(myCars.push("Honda") + "<br>");

// JavaScript shift() method
const herCars = ['Mitshubishi', 'Honda'];
let y = herCars.shift();
document.write(y + "<br>");

// JavaScript unshift() method
const hisCars = ['Mitshubishi', 'Honda'];
document.write(hisCars.unshift("M8 Competition") + "<br>");

// JavaScript delete() method
const delFruits = ["Mango", "Orange", "Banana", "Apple"];
document.write(delete delFruits[0] + "<br>" + delFruits + "<br>");

// JavaScript concat() method
const myBoys = ["Emil", "Tobias", "Linus"];
const myGirls = ["Cecilie", "Lone"];
const myChildren = myBoys.concat(myGirls);
document.write(myChildren + "<br>"); 