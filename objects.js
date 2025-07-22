//object is a collection of values and properties
const info = {
    name: "Alice",
    age: 23,
     sayHello: function(){

return "hello"
    },
    // object inside object
    career: {
        title: "Software Engineer",
        Experience: "2 years"
    }
   
}
//reassigning
info.age = 24

//creating new properties
info.arr = [1, 2  ]

console.log(info)
console.log(info.career)