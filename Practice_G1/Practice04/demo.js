function extractAndRename(obj) {
  const { name: fullName, age: yearsOld } = obj; // Destructure and rename
  return { fullName, yearsOld }; // Return the new object
}

// Example usage
console.log(extractAndRename({ name: "John", age: 25, city: "New York" }));
// Output: { fullName: 'John', yearsOld: 25 }

console.log(extractAndRename({ name: "Jane", age: 30 }));
// Output: { fullName: 'Jane', yearsOld: 30 }

function mergeAndDestructure(obj1, obj2) {
  // Merge the two objects using the spread operator
  const mergedObj = { ...obj1, ...obj2 };

  // Destructure to extract specific properties
  const { name, age } = mergedObj;

  // Return the new object with the extracted properties
  return { name, age };
}

// Example usage
console.log(
  mergeAndDestructure({ name: "John", age: 25 }, { city: "New York" })
);
// Output: { name: 'John', age: 25 }

console.log(mergeAndDestructure({ name: "Jane" }, { age: 30, country: "USA" }));
// Output: { name: 'Jane', age: 30 }
