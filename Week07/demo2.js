const colors = ["red", "green", "purple"];
let newArr = [];
colors.forEach((element) => {
  newArr.push(element.charAt(0).toUpperCase());
});
console.log(newArr);

const nums = [1, 2, 3, 5, 8, 10];
function findEvenAndSquareNum(nums) {
  const evenSquared = nums
    .filter((num) => num % 2 === 0)
    .map((num) => num ** 2);
  return evenSquared;
}

console.log(findEvenAndSquareNum(nums));

const students = [
  {
    id: 1,
    absent: true,
  },
  {
    id: 2,
    absent: false,
  },
  {
    id: 3,
    absent: true,
  },
  {
    id: 4,
    absent: f,
  },
  {
    id: 5,
    absent: false,
  },
];

function findAbsentId(students) {} //array of absent id
function isAllAbsent(students) {} //boolean
