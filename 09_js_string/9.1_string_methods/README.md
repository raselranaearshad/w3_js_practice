# JavaScript String Methods
Javascript strings are primitive and immutable: All string methods produce a new string without altering the original string.
## Extracting String Characters
There are 4 methods for extracting string characters:
* The `at(position)` Method
* The `charAt(position)` Method
* The `charCodeAt(position)` Method
* Using property access `[]` like in arrays

## Extracting String Parts
There are 3 methods for extracting a part of a string:
* `slice(start, end)`
* `substring(start, end)`
* `substr(start, length)`
> NOTE: JavaScript counts positions from zero `0`.

## Converting to Upper and Lower Case
* A string is converted to upper case with `toUpperCase()`
* A string is converted to lower case with `toLowerCase()`

> NOTE: All string methods return a new string. They don't modify the original string.