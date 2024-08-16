function echo(str) {
  console.log(str);
  return str;
}
// 1.1 Store function in variable
// function is the first class citizen
// assign function echo to variable "a"
let a = echo;
console.log(typeof a);

let b = echo("Hello World");
console.log(typeof b); // String

console.log(a("Hello Function")); // Hello Function
// console.log(b("Hello Function")); // Throw Error, b is not function

// 1.2 Passing function
// format String is a higher order function
function formatString(str, op) {
  return op(str);
}
function toUpper(str) {
  return str.toUpperCase();
}
function toLower(str) {
  return str.toLowerCase();
}
console.log(formatString("Do your best", toUpper));
console.log(formatString("Do your best", toLower));

// 1.3 Return function as a function output

function x(op) {
  return op;
}
let m = x(toLower);
console.log(typeof m); //function
console.log(m("GOODBYE")); //goodbye
