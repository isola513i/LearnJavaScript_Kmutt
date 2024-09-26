function squareNumber(num){
    return num * num;
}
console.log(squareNumber(5));


function isEven(num) {
    if(num % 2 === 0) return true
    return false
  }
  
  console.log(isEven(4)); // Expected output: true
  console.log(isEven(7)); // Expected output: false

  function fahrenheitToCelsius(fahrenheit) {
    return celsius = Math.floor((fahrenheit -32) * (5/9))
  }
  
  console.log(fahrenheitToCelsius(100)); // Expected output: 37.7778

//   Write a function removeDuplicates(arr) that removes all duplicate elements from an array and returns the unique elements.
function removeDuplicates(arr) {
    const uniqueElements = new Set(arr)
    return [...uniqueElements]
}

console.log(removeDuplicates([1, 2, 3, 4, 4, 5, 6, 6])); // Output: [1, 2, 3, 4, 5, 6]
console.log(removeDuplicates(['a', 'b', 'a', 'c', 'b'])); // Output: ['a', 'b', 'c']

function capitalizeWords(arr) {
    return arr.map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase());
  }
  
  // Example usage:
  console.log(capitalizeWords(['hello', 'world', 'javascript'])); // Output: ['Hello', 'World', 'Javascript']
  console.log(capitalizeWords(['apple', 'banana', 'cherry']));    // Output: ['Apple', 'Banana', 'Cherry']
  