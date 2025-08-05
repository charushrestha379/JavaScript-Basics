// Ask user for inputs
const num1 = Number(prompt("Enter the first number:"));
const operator = prompt("Enter an operator (+, -, *, /):");
const num2 = Number(prompt("Enter the second number:"));

let result;

if (operator === "+") {
  result = num1 + num2;
} else if (operator === "-") {
  result = num1 - num2;
} else if (operator === "*") {
  result = num1 * num2;
} else if (operator === "/") {
  result = num1 / num2;
} else {
  result = "Invalid operator";
}

// Show result in console
console.log(`${num1} ${operator} ${num2} = ${result}`);
