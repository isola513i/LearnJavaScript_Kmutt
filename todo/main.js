const todoManagement = require("./lib/todoManagement.js");
const tdm = todoManagement();

const id1 = tdm.addTodo("Shopping");
const id2 = tdm.addTodo("Reading");
const id3 = tdm.addTodo("Swimming");

console.log("Todos:", tdm.getTodos()); // แสดงรายการทั้งหมด
console.log("Find Todo by ID:", tdm.findTodo(id1)); // ค้นหาจาก id
