let nums = [1, 2, 3, 4, 5];
const values = nums ?? [];
values[0] = 555;
console.log(values);
