/* Displaying an object will output [object Object]. */
const myObj = {
  name: "Rasel",
  age: "21",
  eyeColor: "Brown"
};
document.write(myObj + "<br>");

// Displaying Object Properties
const person = {
  name: "Alamin",
  age: 22,
  city: "New York"
};
document.write(person["name"] + ", " + person["age"] + ", " + person["city"] + "<br>");

/* Displaying Properties in a Loop */
const userInfo = {
  firstName: 'Rasel',
  age: 20,
  country: 'Switzerland',
};
let show = "";
// Loop Over Object
for (let x in userInfo) {
  show += userInfo[x] + " ";
};
document.write(show + "<br>");

//Object Display using Object.values()
const myName = {
  name: "Charle",
  age: 50,
  city: "New York"
};
// Creating an Array
const myArr = Object.values(myName);
document.write(myArr + "<br>");

//Object display using Object.entries()
const fruits = {
  Apple: 300,
  Banana: 500,
  Orange: 250,
  Carry: 200
};
let result = "";
for (let [fruit, amount] of Object.entries(fruits)) {
  result += fruit + ": " + amount + "<br>"
};
document.write(result);

//Display Object Using JSON.stringify()
const myCars = { Ford: 300, Bmw: 250, Honda: 100 };
// Stringify Object
let myStr = JSON.stringify(myCars);
document.write(myStr);