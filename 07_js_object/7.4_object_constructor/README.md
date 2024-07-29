# JavaScript Object Constructors
---
## Object Constructor Functions
Sometimes we need to create many objects of the same **type**. To create an **object type** we use an **object constructor function**.
> NOTE: It is considered good practice to name constructor functions with an upper-case first letter.
### Example:
```js
function Person (first,last,age,eyeColor) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eye;
};
```
Now we can use `new Person()` to create many new Person objects:
```js
const myFather = new Person('Anower','Hossain','50','Brown');
const myMother = new Person('Rotna', 'Akter','35','Black');
const mySister = new Person('Lamiya','Akter','05','Black');

```