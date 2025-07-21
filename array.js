//an array is a special variable that can hold multiple values in a single place.
let fruits = ["apple", "banana", "cherry"]
console.log(fruits[0]); // Output: apple
console.log(fruits[1], fruits[2]); // Output: banana cherry

//array with dynamic size
const arr2 = new Array(5); // creates an array of size 5
console.log(arr2[2]) //undefined

const arr3 = Array.from("hello") // creates an array from a string
console.log(arr3) // Output: [ 'h', 'e', 'l', 'l', 'o' ]
console.log(arr3[2])
arr3[4] = "y"
console.log(arr3)
arr3[arr3.length + 2] = "hi" // adds "hi" at the end of the array
console.log(arr3)

fruits = fruits.slice(0, 2) //removes elements fromt the array
console.log(fruits) // Output: [ 'apple', 'banana' ]

//array destructuring is a concise way to extract values from an array and assign them to variables
const [x, y] = [1, 2]
console.log(x, y)

//using spread operator [...] to copy an array
const[a, b, ...c] = [1,2,3,4,5]
console.log(a, b, c) // Output: 1 2 [ 3, 4, 5 ] 

//array mutability(can be changed after its created)
const arr4 = [1, 2, 3]
arr4[0] = 88
arr4.push("new item") // adds a new item to the end of the array) 
console.log(arr4) // Output: [ 88, 2, 3 ]


//spread operator unpacks the elements of the fruits array
const newarr  = [1, ...fruits]
console.log(newarr) // output: [ 1, 'apple', 'banana' ]