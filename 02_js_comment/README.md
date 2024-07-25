# JavaScript Comments
JavaScript commets can be used to explain JavaScript code, and to make it more readable.

JavaScript comments can also be used to prevent execution, when tasting alternative code.

## Single Line Comment
* Single line comments start with ```//```.
* Any text between ```//``` and the end of the line will be ignored by JavaScript. (Will not executed)
### Example:
```JavaScript
let x = 5;    //Declare x, give it the value of 5
let y = x + 2;    // Declare y, give it the value of x + 2
```

## Multi-line Comments
* Multi line comments start with ```/*``` and end with ```*/```.
* Any text between ```/*``` and ```*/``` will be ignored by JavaScript.
### Example:
This example uses a multi-line comment (a comment block) to explain the code:
```JavaScript
/* 
The code below will change the heading with id = "myH" 
and the paragraph with id = "myP" in my web page.
*/
document.getElementById("myH").innerHTML = "My Frist Page";
document.getElementById("myP").innerHTML = "My Frist paragraph."
```
> Note: 
It is most common to use single line comments.
Block comments are often used for formal documentation.
