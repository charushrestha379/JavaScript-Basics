// //defining variables
var greeting = 'hello'
 hello = 'hi';
// //var is used to declare a variable that can be reassigned.

let name = "Charu"
charu = 'girl'
// //let is used to declare a variable that can be reassigned, but it is block-scoped, meaning it is only accessible within the block it is defined in.

const pi = 3.14
 //const is used to declare a variable that cannot be reassigned, it is also block-scoped.

if (true) {
let x = 3
console.log(x) //block scoped, only initialize after the block is executed
 //x is only accessible within this block
}

console.log(greeting) //function scoped(can defined outside of a block)

function test() {
    console.log(c)
    var b = 2
    var c = 5
    console.log(b)
}
test()