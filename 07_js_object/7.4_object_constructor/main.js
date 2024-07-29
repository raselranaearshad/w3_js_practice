// Object Function Constructor
function Person(first,last,age) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  // Adding a Method to a Constructor
  this.fullName = function () {
    return this.firstName + " " + this.lastName;
  };
}
// Create three Person objects
const myFather = new Person('Anower', 'Hossain', 50);
const myMother = new Person('Rotna', 'Akter', 35);
const mySister = new Person('Lamiya', 'Akter', '05');

document.write("My father's name is" + " " + myFather.fullName());