// Write a function reverseAndUppercase(str) that reverses the given string and converts it to uppercase
function reverseAndUppercase(str) {
  return str.split("").reverse().join("").toUpperCase();
}
console.log(reverseAndUppercase("hello")); // 'OLLEH'
console.log(reverseAndUppercase("JavaScript")); // 'TPIRCSEVAJ'
console.log(reverseAndUppercase(""));
