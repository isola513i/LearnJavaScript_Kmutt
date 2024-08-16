let numbers = [1, 2, 3, 4, 5];
let values = ["a", "b", "c", "d"];

numbers.push(6);
values = numbers; // alias
values.push("d");
console.log(numbers);
console.log(values);

// === strictly equals, == weakly equals, = assignment
if (typeof numbers === "object") console.log("numbers is an objects");
else console.log("numbers is not an object");

// Backticks (Template syntax)
let str = "Hello World";
let num = 5;
let msg = "ABC";
console.log(`${str}, and, ${num * 2}`); // Hello World, and, 10
