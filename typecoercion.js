//Type coercion is JavaScript's automatic process of converting one data type to another when needed.
//Implicit Coercion = JavaScript does it automatically
//Explicit Coercion = You do it manually (e.g. using String(), Number())

const x = 6
const y = 5
const z = '6'
console.log(x + y)
console.log(x + z) //implicit coercion

const str = "12"
const num = Number(str) //explicit coercion
console.log(x + num)
 const a = true //true = 1
 const b = false //false = 0
 const c = "hello"

 console.log(x + a)
 console.log(x + b)
 console.log(x + c) //NaN (Not a Number) because you cannot add a number and a string
