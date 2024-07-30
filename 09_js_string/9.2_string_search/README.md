# JavaScript String Search
---
## JavaScript String indexOf()
The `indexOf()` method returns the **index** (position) of the first occurrence of a **string** in a string, or it returns -1 if the string is not found.
```js
let text = "Please locate where 'locate' occurs!";
let index = text.indexOf("locate");
```
## JavaScript String lastIndexOf()
The `lastIndexOf()` method returns the **index** of the **last** occurrence of a specified text in a string.
```js
let text = "Please locate where 'locate' occurs.";
let lastIndex = text.lastIndexOf("locate");
```
## JavaScript String search()
The `search()` method searches a string for a string (or a regular expression) and returns the position of the match.
```js
let text = "Please locate where 'locate' occurs!"
text.search(/locate/);
```

## JavaScript String match()
The `match()` method returns an array containing the results of matching a string against a string (or a regular expression).
```js
let text = "The rain in SPAIN stays mainly in the plain";
text.match("ain"); 
```
## JavaScript String matchAll()
The `matchAll()` method returns an iterator containing the results of matching a string against a string (or a regular expression).
```js
 const iterator = text.matchAll("Cats");
```

## JavaScript String includes()
The `includes()` method returns `true` if a string contains a specified value. Otherwise it returns `false`.
```js
let text = "Hello world, welcome to the universe.";
text.includes("world");
```

## JavaScript String startsWith()
The `startWith()` method returns `true` if a string contains a specified value. Otherwise it returns `false`.
```js
let text = "Hello world, welcome to the universe.";
text.startsWith("Hello");
```