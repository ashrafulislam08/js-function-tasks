// Write a function called make_avg() which will take an array of integers and the size of that array and return the average of those values.

function make_avg(numbers) {
  let sum = 0;
  let length = numbers.length;
  for (const number of numbers) {
    sum += number;
  }
  let average = sum / length;
  return average;
}

const numbers = [1, 7, 5, 6, 8, 12, 44];
console.log(make_avg(numbers));
