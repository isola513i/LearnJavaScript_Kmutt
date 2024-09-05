//1. object literal
// const person = { name: 'Somchai', id: 123456, name: 'Suda' }
// console.log(person.name)
// console.log(person.id)

// console.log(person['id'])
// console.log(person['name'])

// for (let key in person) {
//   console.log(key, person[key])
// }

//2. function constructor
// function Person(id, name) {
//   this.id = id;
//   this.name = name;
// }
// //correct way use function constructor
// const p1 = new Person(1, "Somchai");
// const p2 = new Person(2, "Suda");
// console.log(p1);
// console.log(p2);

// //wrong using function constructor
// const x = Person(1, "A");
// console.log(x); //undefined

// 3.ES6 Classes
class Person {
  constructor(id, name) {
    this.id = id;
    this.name = name;
  }
  getId() {
    return this.id;
  }
  getName() {
    return this.name;
  }
  toString() {
    return `Id: ${this.id}, Name: ${this.name}`;
  }
}
const p1 = new Person(1, "Somchai");
const p2 = new Person(2, "Somsak");
const p3 = new Person(3, "Somporn");
console.log(p1.getId());
console.log(p1.getName());
console.log(p1.toString());

const s1 = Object.create(p1);
console.log(s1); // Person
console.log(s1.id);
console.log(s1.name);
console.log(s1.id);
console.log(s1.name);
s1.email = "john@gmail.com";
console.log("===============");
console.log(s1);
