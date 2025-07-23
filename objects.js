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
//to show values only
console.log(Object.values(info))
console.log(Object.keys(info.career))
//to show keys only 
console.log(Object.keys(info))
//to show both keys and values
console.log(Object.entries(info))


//combining objects
const info2 = {
    hairColor: "black",
    age: 20,
    arr2: [1, 2, 3]
}

const info3 = {...info, ...info2}
console.log(info3)
info2.hairColor = "brown"
info2.arr2.push("hello")
console.log(info, info2)

//destructuring objects is 
const {hairColor, name} = info3
console.log(hairColor, name)