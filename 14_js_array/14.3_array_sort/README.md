# JavaScript Array Sort
---
## Alpabetic Sort():
### Array `sort()`
The `sort()` method sorts an array alphabetically
```js
const fruits = ["Mango", "Apple", "Banana", "Kiwi"];
fruits.sort();
```
### Array `reverse()`
The `reverse()` method reverses the elements in an array
```js
const fruits = ["Mango", "Apple", "Banana", "Kiwi"];
fruits.reverse();
```

### Array `toSorted()`
The difference between `toSorted()` and `sort()` is that the first method creates a new array, keeping the original array unchanged, while the last method alters the original array.
```js
const fruits = ["Mango", "Apple", "Banana", "Kiwi"];
fruits.toSorted();
```

### Array `toReverse()`
The difference between `toReversed()` and `reverse()` is that the first method creates a new array, keeping the original array unchanged, while the last method alters the original array.
```js
const months = ["Jan", "Feb", "Mar", "Apr"];
const reversed = months.toReversed();
```