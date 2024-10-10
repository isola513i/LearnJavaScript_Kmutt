const echo = (x) => x; // assign a function to a variable
const y = echo; // assign reference to a function to another variable
console.log(y); // What is y?
console.log(y(10)); // call the function using the new variable
console.log(typeof y); // function
