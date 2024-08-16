console.log(Number.isInteger(10.2)); // False
console.log(Number.isInteger(10)); // True
console.log(Number.isInteger(10.0)); // True

console.log(1 + 1); // 2 + Math
console.log(1 + "1"); // 11 + concat
console.log("1" + "1"); // 11 + concat
console.log(Number.parseInt("1") + 1); // 2
console.log(Number("1") + 1); // 2

// 0 - False , 1 - True
// Implicit type conversion
// Number(),Boolean(),String()
if ("0") console.log("not zero");
else console.log("zero");
