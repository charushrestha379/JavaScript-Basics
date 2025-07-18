const x = "22"
const y = 10 
const z = '5px'
const a = '22.4'
console.log(x + y) // implicit coercion, x is coerced to a number
console.log(Number(x) + y) // explicit coercion, x is converted to a number
//ParseInt function converts converts its first argument to a string, parses(read and convert) it, and returns an integer
console.log(parseInt(z) + y) //15
console.log(parseFloat(a) + y) //32.4
console.log(String(x) + y)