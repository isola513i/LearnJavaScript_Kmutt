function classifyNumber(num) {
  if (typeof num != "number") {
    return throw new Error("Invalid input parameter.");
  }
  if (num > 0) {
    return "positive";
  }
  if (num < 0) {
    return "negative";
  }
  if (num === 0) {
    return "zero";
  }
}

// ตัวอย่างการใช้งาน
console.log(classifyNumber(5)); // Output: positive
console.log(classifyNumber(-3)); // Output: negative
console.log(classifyNumber(0)); // Output: zero
