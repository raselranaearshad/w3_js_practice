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
## Numeric Sort
---
By default, the `sort()` function sorts values as strings. This works well for strings. 

If numbers are sorted as strings, "25" is bigger than "100", because "2" is bigger than "1".

You can fix this by providing a **compare function**:
```js
const numbers = [40, 100, 1, 5, 25, 10];
numbers.sort(function (a, b){retun a - b});
```

### Compare Function:
The purpose of the compare function is to define an alternative sort order.
```js
function (a, b) {return a - b};
```
When the `sort()` function compares two values, it sends the values to the `compare function`, and sorts the values according to the returned (negative, zero, positive) value.
* If the result is negative, a is sorted before b.

* If the result is positive, b is sorted before a.

* If the result is 0, no changes are done with the sort order of the two values.

## Find the Lowest (or Highest) Array Value
To find the lowest or highest value you have 3 options:

* Sort the array and read the first or last element
* Use Math.min() or Math.max()
* Write a home made function

### Find Min or Max with sort()
```js
const numbers = [40, 100, 1, 5, 25, 10, 65, 77];
const sortNum = numbers.sort(function (a, b){return a - b});
console.log(sortNum[0]);  // sortNum[0] contains the lowest value
console.log(sortNum[sortNum.length - 1]); // sortNum[sortNum.length-1] contains the highest value
```
> NOTE : Sorting a whole array is a very inefficient method if you only want to find the highest (or lowest) value.

### Find min or max value using home made function()
The fastest code to find the highest number is to use a home made method.

Find Min Number Example: 
```js
const nayNum = [4, 11, 54, 23, 12, 2, 18, 48, 32, 31, 54];
function findMinNum (minNum) {
  let len = minNum.length;
  let min = Infinity;
  while (len--) {
    if (minNum[len] < min) {
      min = minNum[len]
    };
  }
  return min
};
console.log(findMinNum(nayNum));
```
Find Max Num Example:
```js
const alaNum = [4, 11, 54, 23, 12, 3, 18, 48, 32, 54];
function findMaxNum (maxNum){
  let leng = maxNum.length;
  let max = -Infinity;
  while(leng--){
    if(maxNum[leng] > max){
      max = maxNum[leng]
    };
  }
  return max;
};
console.log(findMaxNum(alaNum));
```