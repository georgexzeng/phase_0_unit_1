// I paired by myself on this challenge.

// __________________________________________
// Write your code below.

var secretNumber = 7;

var password = "just open the door";

var allowedIn = false;

var members = ['John', 'Bob', 'George', 'Mary']

// __________________________________________
// Reflection: Use the reflection guidelines to write a reflection here. 
// This unit actually taught me that javascript syntax is very similar to Ruby syntax
// The key primitives are strings and numbers, etc.
// There are a few key differences though:
// 1. in javascript, it's key to use the 'var' name when denoting values - otherwise they variables
// are global ones and that's very bad
// 2. in javascript, you use turtleCase instead of snake_case
// other than that, javascript syntax is almost the same as ruby syntax

// __________________________________________
// Test Code:  Do not alter code below this line.

function assert(test, message, test_number) {
  if (!test) {
    console.log(test_number + "false");
    throw "ERROR: " + message;
  }
  console.log(test_number + "true");
  return true;
}

assert(
  (typeof secretNumber === 'number'),
  "The value of secretNumber should be a number.",
  "1. "
)

assert(
  secretNumber === 7,
  "The value of secretNumber should be 7.",
  "2. "
)

assert(
  typeof password === 'string',
  "The value of password should be a string.",
  "3. "
)

assert(
  password === "just open the door",
  "The value of password should be 'just open the door'.",
  "4. "
)

assert(
  typeof allowedIn === 'boolean',
  "The value of allowedIn should be a boolean.",
  "5. "
)

assert(
  allowedIn === false,
  "The value of allowedIn should be false.",
  "6. "
)

assert(
  members instanceof Array,
  "The value of members should be an array",
  "7. "
)

assert(
  members[0] === "John",
  "The first element in the value of members should be 'John'.",
  "8. "
)

assert(
  members[3] === "Mary",
  "The fourth element in the value of members should be 'Mary'.",
  "9. "
)

