let a = 1; // Global
a++;
function doSomething() {
  let a = "Hello World "; // Function
  console.log(a); // Hello
}
{
  let a = true; // Block
  console.log(a); // True
}
doSomething();
console.log(a); // 2
