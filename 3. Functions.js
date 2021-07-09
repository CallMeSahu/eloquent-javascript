//Function with parameter
const square = function(x) {
  return x * x;
};
console.log(square(12));

//Function without parameter
const makeNoise = function() {
  console.log("Pling!");
};

makeNoise();

//Scope of Function
let x = 10;
if (true) {
  let y = 20;
  var z = 30;
  console.log(x + y + z);
  // → 60
}
// y is not visible here
console.log(x + z);
// → 40

// Nested Functions 
const hummus = function(factor) {
  const ingredient = function(amount, unit, name) {
    let ingredientAmount = amount * factor;
    if (ingredientAmount > 1) {
      unit += "s";
    }
    console.log(`${ingredientAmount} ${unit} ${name}`);
  };
  ingredient(1, "can", "chickpeas");
  ingredient(0.25, "cup", "tahini");
  ingredient(0.25, "cup", "lemon juice");
  ingredient(1, "clove", "garlic");
  ingredient(2, "tablespoon", "olive oil");
  ingredient(0.5, "teaspoon", "cumin");
};

//Declarative Notation for Functions 
function square(x) {
  return x * x;
}

//Arrow Notation for Functions
const power = (base, exponent) => {
  let result = 1;
  for (let count = 0; count < exponent; count++) {
    result *= base;
  }
  return result;
};

// Function without Parenthesis
const square1 = (x) => { return x * x; };
const square2 = x => x * x;

//Optional Arguments
function power(base, exponent = 2) {
  let result = 1;
  for (let count = 0; count < exponent; count++) {
    result *= base;
  }
  return result;
}

console.log(power(4));
// → 16
console.log(power(2, 6));
// → 64

//Recursive Solution
function findSolution(target) {
  function find(current, history) {
    // if current equals target, return history
    if (current === target) {
      return history;
    // if current is greater than target, return null
    } else if (current > target) {
      return null;
    // if current is less than target
    } else {
      // tries both branches, first add 5, then multiply by 3
      return find(current + 5, `(${history} + 5)`) ||
             find(current * 3, `(${history} * 3)`);
    }
  }
  // return initial call to "find"
  return find(1, "1");
}
console.log(findSolution(24));
// → (((1 * 3) + 5) * 3)

//Summary
// Define f to hold a function value
const f = function(a) {
  console.log(a + 2);
};

// Declare g to be a function
function g(a, b) {
  return a * b * 3.5;
}

// A less verbose function value
let h = a => a % 3;