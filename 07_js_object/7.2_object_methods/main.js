// JavaScript Object Method Example:
const userInfo = {
  firstName: "Zafor",
  lastName: "Iqbal",
  age: 32,
  idNum: 3250,
  fullName: function () {
    return this.firstName + " " + this.lastName;
  }
};
document.write(userInfo.fullName() + "<br>");

// Adding a Method to an Object
const person = {
  firstName: "Akkas",
  lastNmae: "Ali",
  age: 50,
};
// New Method
person.fatherName = function () {
  return (this.firstName + " " + this.lastNmae).toUpperCase(); // Adding a method called toUpperCase()
};
document.write(person.fatherName() + " is my brother.")