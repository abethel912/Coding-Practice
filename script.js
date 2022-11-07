// // Let's start with a conversion from kilometers to miles. The function should include the input in kilometers and return the answer in miles.

function kmToMiles(kilometer) {
  return kilometer * 0.62137
}

// // // Calculate the sum of numbers within an array

const array = [1, 2, 3, 4, 5, 6, 7, 8];
let total = 0;

for (let i = 0; i < array.length; i++) {
  total += array[i];
}

// // Write a function that calculates the length and width of a polygon.

function polygonTotal(length, width) {
  if (length === width) {
    return length * width
  }
  if (length !== width) {
    return 2 * (length + width)
  }
}

// // We need a function that can transform a string into a number. What ways of achieving this do you know?

const stringToNumber = function (str) {
  return Number(str)
}

// // Your task is to write a function which returns the time since midnight in milliseconds.

function past(h, m, s) {
  if (0 <= h <= 23, 0 <= m <= 59, 0 <= s <= 59) 
    return (h * 1000 * 60 * 60) + (m * 1000 * 60) + (s * 1000)  
}

// // Write a function that accepts an integer n and a string s as parameters, and returns a string of s repeated exactly n times.
 
function repeatStr(n, s) {
  return s.repeat(n)
}

// You will be given an array a and a value x. All you need to do is check whether the provided array contains the value.

// Array can contain numbers or strings. X can be either.

// Return true if the array contains the value, false if not.

function check(a, x) {
  for (let i = 0; i < a.length; i++) {
    if (a[i] === x) {
      return true
    }
  }
  return false
}

// This kata is about multiplying a given number by eight if it is an even number and by nine otherwise.

function simpleMultiplication(number) {
  if (number % 2 === 0) {
    return number * 8
  } else {
    return number * 9
  }
}







