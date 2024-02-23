// Exercise 1

// Exercise 2

function checkIfNoOddNumbers(arr) {
  return arr.every((num) => num % 2 === 0);
}
const array1 = [2, 4, 6, 8];
console.log(checkIfNoOddNumbers(array1));

// Exercise 3

function concatenateString(str, n) {
  if (n <= 0) {
    n = 1;
  }

  let result = "";

  for (let i = 0; i < n; i++) {
    result += str;
  }

  return result;
}
console.log(concatenateString("hello", 3));
