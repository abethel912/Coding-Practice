// Let's start with a conversion from kilometers to miles. The function should include the input in kilometers and return the answer in miles.

function kmToMiles(kilometer) {
  return kilometer * 0.62137
}
//
console.log(kmToMiles(3))

// // Calculate the sum of numbers within an array

const array = [1, 2, 3, 4, 5, 6, 7, 8];
let total = 0;

for (let i = 0; i < array.length; i++) {
  total += array[i];
}

console.log(total)

// Write a function that calculates the length and width of a polygon.

function polygonTotal(length, width) {
  if (length === width) {
    return length * width
  }
  if (length !== width) {
    return 2 * (length + width)
  }
}

console.log(polygonTotal(5, 4))

// We need a function that can transform a string into a number. What ways of achieving this do you know?

const stringToNumber = function (str) {
  return Number(str)
}

// Your task is to write a function which returns the time since midnight in milliseconds.

function past(h, m, s) {
  if (0 <= h <= 23, 0 <= m <= 59, 0 <= s <= 59) 
    return (h * 1000 * 60 * 60) + (m * 1000 * 60) + (s * 1000)  
}

// Write a function that accepts an integer n and a string s as parameters, and returns a string of s repeated exactly n times.
 
function repeatStr(n, s) {
  return s.repeat(n)
}



