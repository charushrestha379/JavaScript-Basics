const prompt = require("prompt-sync")()

const v = prompt("What is your Name?")
console.log("hello", v)


// prompt-sync is a module(a node.js package) that allows you to get user input from the terminal.
// require('prompt-sync')() creates a function that you can call to get user input.
// () at the end initializes the prompt-sync module.
// const is used to declare a variable that cannot be reassigned.