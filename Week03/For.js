let nums = [1, 3, 5, 7];
let str = "Hello World";
//array, string, iterable object
//for...of
for (let num of nums) {
  console.log(num);
}
for (let ch of str) {
  console.log(ch);
}
let student = { id: 665000102, name: "Suda", email: "suda@kmutt.ac.th" };
//object.property, object[property] read property value of object
for (let prop in student) {
  console.log(`${prop}:${student[prop]}`); //id:665000102
}

//foreach
nums.forEach((num) => console.log(num));
