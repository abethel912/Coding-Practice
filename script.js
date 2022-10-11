// Let's start with a conversion from kilometers to miles. The function should include the input in kilometers and return the answer in miles.


function kmToMiles(kilometer) {
  return kilometer * 0.62137
}
//
console.log(kmToMiles(3))

// Calculate the sum of numbers within an array

const array = [1, 2, 3, 4, 5, 6, 7, 8];
let total = 0;

for (let i = 0; i < array.length; i++) {
  total += array[i];
}

console.log(total)