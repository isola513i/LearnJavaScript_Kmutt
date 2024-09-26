console.log("----------------- Literal Function -----------------");
const obj = { id: 1, name: "John" };
console.log(obj);

console.log("----------------- Constructor Function -----------------");
function ObjectFactory(id, title = "untitled") {
  this.id = id;
  this.title = title;
  this.email = "no email";
}
const x1 = new ObjectFactory(1, "John");
const x2 = new ObjectFactory(2);
console.log(x1);
console.log(x2);

console.log("----------------- Class Function -----------------");
class Student {
  constructor(id, name = "untitled", email = "no email") {
    this.id = id;
    this.name = name;
    this.email = email;
  }
  getId() {
    return this.id;
  }
  //  Overiding
  toString() {
    return `Id: ${this.id}, Name: ${this.name}`;
  }
}
const s1 = new Student(1, "John", "test@gmail.com");
const s2 = new Student(2);
console.log(s1);
console.log("ID:" + s1.getId());
console.log(s1.toString());
console.log(s2);

Student.prototype.getEMail = function () {
  return this.email;
};
console.log(s1.getEMail());
console.log(Student.prototype);

console.log("----------------- Prototype -----------------");

const arr = [1, 3, 5, 7];
delete arr[1];
console.log(arr);
console.log(arr.length);

const obj1 = { id: 1, name: "unNamed" };
delete obj1["id"]; //delete property
console.log(obj);
obj.email = "unname@kmutt.ac.th"; //adding a new property
console.log(obj1);
obj.email = "unEmail"; //reassign property value
console.log(obj1);
