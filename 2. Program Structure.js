
// Defined and Undefined Variables
let a;
console.log(a);
a = 10;
console.log(a);

// Define Multiple Binding
let num1=10, num2=20;
console.log(num1+num2);

// const Keyword
const name = "Siddhartha";
console.log(name);
//name = "something else";
//console.log(name);

//Function
prompt("Enter passcode");

// Conditional Execution
let theNumber = Number(prompt("Pick a number"));
if (!Number.isNaN(theNumber)) {
  console.log("Your number is the square root of " +
              theNumber * theNumber);
}

let num = Number(prompt("Pick a number"));

if (num < 10) {
  console.log("Small");
} else if (num < 100) {
  console.log("Medium");
} else {
  console.log("Large");
}

let number = 0;
while (number <= 12) {
  console.log(number);
  number = number + 2;
}

let result = 1;
let counter = 0;
while (counter < 10) {
  result = result * 2;
  counter = counter + 1;
}
console.log(result);

let result = 1;
for (let counter = 0; counter < 10; counter = counter + 1) {
  result = result * 2;
}

for (let current = 20; ; current = current + 1) {
  if (current % 7 == 0) {
    console.log(current);
    break;
  }
}

//Switch Statements
switch (prompt("What is the weather like?")) {
  case "rainy":
    console.log("Remember to bring an umbrella.");
    break;
  case "sunny":
    console.log("Dress lightly.");
    break;
  case "cloudy":
    console.log("Go outside.");
    break;
  default:
    console.log("Unknown weather type!");
    break;
}