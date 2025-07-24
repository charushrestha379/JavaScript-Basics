//set is a buit in object in JavaScript that stores unique values of any type
let fruits = new Set();

fruits.add("apple");
fruits.add("banana");
fruits.add("apple");  // Duplicate — ignored

console.log(fruits);        // Set(2) { 'apple', 'banana' }
console.log(fruits.size);   // 2
console.log(fruits.has("apple")); // true