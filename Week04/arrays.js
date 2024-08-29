// const values = [
//   123,
//   "hello world",
//   true,
//   [5, 6, 7],
//   { id: 1, title: "untitled" },
// ];
// values[values.length] = "good bye"; //grow size
// //values.push('good bye')
// console.log(values);
// console.log(values[0]); //first item
// console.log(values[values.length - 1]); //last item

// values.forEach((element) => {
//   console.log(element);
// });

// for (const item of values) {
//   console.log(item);
// }

// 1. Literal
const colors = ["red", "blue", "green", "yellow"];
console.log(colors[0].length);
console.log(colors.length);

// 2. Spread Operators
// primitive type
const values = [5, 10, 15, 20];
const x = [100, 200, 300];
const nums = [...x, 1, 3, ...values];
console.log(nums);

// change value of nums
nums[0] = 555;
console.log(nums);
console.log(x);

// object type array
const students = [
  { id: 665000123, name: "Somchai" },
  { id: 66500045, name: "Tonpee" },
];

const alumniStudents = [...students]; // [refAddress,refAddress]
alumniStudents[0].id = 999999;
console.log(students);
console.log(alumniStudents);

const str = "hello world";
console.log([...str]);
