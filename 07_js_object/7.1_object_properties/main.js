// Access a property with .
const alamin = {
  firstName: "Alamin",
  lastName: "Islam",
  age: 20,
  weight: "60 Kg"
};
document.write(alamin.firstName + " is " + alamin.age + " years " + " old. " + "<br>");

// Access a property with []
const jameAbir = {
  firstName: "Jame",
  lastName: "Abir",
  age: 28,
  eyeColor: "Brown",
  height: "5 Feet 11"
};
let x = "Mr.";
// Delete a property
delete jameAbir["age"];
document.write(x + " " + jameAbir["firstName"] + " is " + jameAbir["age"] + " years " + " old. " + "<br>");

// Accessing a Property with an Expression
const rasel = {
  firstName: "Rasel",
  lastName: "Ahmed",
  age: 19,
};
let X = 'firstName';
let Y = 'age';
// Adding a new property
rasel.nationality = "Bangladeshi"
document.write(rasel[X] + " is " + rasel.nationality + "<br>");

/* Nested Objects */
const myObj = {
  name: "Kabir",
  age: 45,
  // Nesting a new object.
  myCar : {
    brand: "BMW",
    model: "M8 Compitision",
    engine: "v12"
  }
};
document.write(myObj.myCar["model"]);