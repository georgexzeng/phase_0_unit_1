// My role in the group is: Refactor and translate

// Here is my part of the challenge:

//Test 1
//User story: The 'sum' function will take a list of numbers and add each of them together and return the result.

function sum(numList) {
  var sum = 0;
  for (var i = 0; i < numList.length; i++){
    sum += numList[i];
  }
  return sum;
}


//test:
var numbers = [3,4,6];
console.log(sum(numbers));


//Test2
//User story: The 'mean' function will take a list of numbers, add each of them together, divide this value by the total number of items in the list, and then return this result.

function mean(numList) {
  var sum = 0;
  for (var i = 0; i < numList.length; i++){
    sum += numList[i];
  }
  return (sum/numList.length);
}

//test:
var numbers = [1,2,3];
console.log(mean(numbers));


//Test 3
//User story: The 'median' function will take a list of numbers and use the 'checkEven' function to determine if the list has an odd or even amount of items in it. If the list has an odd number of items, 'findMiddle' returns the number that is the middle of the list. If the list has an even number of items, 'findMiddle' returns the average of the sum of the two numbers in the middle of the list.

function checkEven (numList) { 
  return (numList.length % 2 == 0);
}

function median (numList) {
  if (!(checkEven(numList))) {
    return (numList[(Math.floor(numList.length/2))]);
  }
  else {
    return (((numList[(numList.length/2)]) + (numList[(numList.length/2 - 1)]))/2);
  }
}

//test with even and odd arrays:
var numbers = [3,4,6,7,8,9];
var numbers2 = [3,4,6,7,8];
console.log(median(numbers));
console.log(median(numbers2));


// Tests:  Do not alter code below this line.


oddLengthArray  = [1, 2, 3, 4, 5, 5, 7]
evenLengthArray = [4, 4, 5, 5, 6, 6, 6, 7]


function assert(test, message, test_number) {
  if (!test) {
    console.log(test_number + "false");
    throw "ERROR: " + message;
  }
  console.log(test_number + "true");
  return true;
}

// tests for sum
assert(
  (sum instanceof Function),
  "sum should be a Function.",
  "1. "
)

assert(
  sum(oddLengthArray) === 27,
  "sum should return the sum of all elements in an array with an odd length.",
  "2. "
)

assert(
  sum(evenLengthArray) === 43,
  "sum should return the sum of all elements in an array with an even length.",
  "3. "
)

// tests for mean
assert(
  (mean instanceof Function),
  "mean should be a Function.",
  "4. "
)

assert(
  mean(oddLengthArray) === 3.857142857142857,
  "mean should return the average of all elements in an array with an odd length.",
  "5. "
)

assert(
  mean(evenLengthArray) === 5.375,
  "mean should return the average of all elements in an array with an even length.",
  "6. "
)

// tests for median
assert(
  (median instanceof Function),
  "median should be a Function.",
  "7. "
)

assert(
  median(oddLengthArray) === 4,
  "median should return the median value of all elements in an array with an odd length.",
  "8. "
)

assert(
  median(evenLengthArray) === 5.5,
  "median should return the median value of all elements in an array with an even length.",
  "9. "
)