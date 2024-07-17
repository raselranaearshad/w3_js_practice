/* You can change the elements of a constant array. */

// Careate an Array
const car = ["Saab", "Volvo", "Audi", "BMW"];

// Changes an Element.
car[0] = "Toyota";

// Add an Element.
car.push("Mercedes")

document.write(car + "<br>");

/* You can change the properties of a constant object */

// Create an object:
const info = {type:"Fiat", model: "500", color: "White"};

// Change a property:
info.color = "Red";

// Add a property:
info.owner = "Jonathon"

document.write(info.owner);