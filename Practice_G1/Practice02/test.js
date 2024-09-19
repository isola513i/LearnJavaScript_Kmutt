// 1. Write a function classifyNumber(num) that classifies a number as "positive", "negative", or "zero".
function classifyNumber(num) {
  if (num > 0) {
    return "positive";
  } else if (num < 0) {
    return "negative";
  } else {
    return "zero";
  }
}
console.log(classifyNumber(10)); // 'positive'
console.log(classifyNumber(-5)); // 'negative'
console.log(classifyNumber(0)); // 'zero'

// Write a function countVowels(str) that returns the number of vowels in a given string.
function countVowels(str) {
  let count = 0;
  const vowels = "AEIOUaeiou";
  for (let index = 0; index < str.length; index++) {
    if (vowels.includes(str[index])) {
      count++;
    }
  }
  return count;
}
console.log(countVowels("hello")); // 2
console.log(countVowels("world")); // 1
console.log(countVowels("why")); // 0

function countVowels(str) {
  let count = 0;
  const vowels = "AEIOUaeiou";
  for (let index = 0; index < str.length; index++) {
    if (vowels.includes(str[index])) {
      count++;
    }
  }
  return count;
}

// Write a function evaluateExpression(a, b, operator) that takes two numbers a and b, and a string operator which can be "+", "-", "*" or "/". The function should return the result of the arithmetic operation.

function evaluateExpression(a, b, operator) {
  switch (operator) {
    case "+":
      return a + b;
    case "-":
      return a - b;
    case "*":
      return a * b;
    case "/":
      return a / b;
    default:
      return "Invalid operator";
  }
}
console.log(evaluateExpression(3, 7, "+")); // 10
console.log(evaluateExpression(3, 7, "-")); // -4

// Write a function fizzBuzz(n) that returns an array of numbers from 1 to n. For multiples of three, the number should be replaced with "Fizz", and for multiples of five, it should be replaced with "Buzz". For numbers which are multiples of both three and five, it should be replaced with "FizzBuzz".

function fizzBuzz(n) {
  const result = [];
  for (let i = 0; i < n; i++) {
    if ((i + 1) % 3 === 0 && (i + 1) % 5 === 0) {
      result.push("FizzBuzz");
    } else if ((i + 1) % 3 === 0) {
      result.push("Fizz");
    } else if ((i + 1) % 5 === 0) {
      result.push("Buzz");
    } else {
      result.push(i + 1);
    }
  }
  return result;
}
console.log(fizzBuzz(5)); // [1, 2, 'Fizz', 4, 'Buzz', 'Fizz', 7, 8, 'Fizz', 'Buzz', 11, 'Fizz', 13, 14, 'FizzBuzz']

// Write a function isInRange(num, min, max) that returns true if num is between min and max (inclusive), and false otherwise.
function isInRange(num, min, max) {
  if (num >= min && num <= max) {
    return true;
  }
  return false;
}
console.log(isInRange(3, 1, 5)); // true

// Write a function isPrime(num) that returns true if num is a prime number, and false otherwise.
function isPrime(num) {
  if (num <= 1) {
    return false;
  }
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}
console.log(isPrime(7)); // true
console.log(isPrime(10)); // false

let age = 18;
let message =
  age >= 18 ? "You are eligible to vote" : "You are not eligible to vote";
console.log(message);
