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
console.log(x.toString()) //converts x to a string

// Type coercion: automatic type change by JS (e.g., '5' + 1 = '51')
// Type conversion: manual type change by developer (e.g., Number('5') + 1 = 6)
