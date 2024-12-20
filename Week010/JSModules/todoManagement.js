const Todo = require("./libs/Todo.js");
function todoManagement() {
  const todos = [];
  function addTodo(desc) {
    return todos.push(new Todo(desc));
  }
  function findTodo(searchId) {
    return todos.find((todo) => todo.id === searchId);
  }
  function findIndexTodo(searchId) {
    return todos.findIndex((todo) => todo.id === searchId);
  }
  function removeTodo(removeId) {
    todos.splice(findIndexTodo(removeId), 1);
  }
  function getTodos() {
    return todos;
  }

  return { addTodo, getTodos, findTodo, removeTodo };
}
//accept by object named todoManger
const todoManager = todoManagement();
console.log(todoManager.addTodo("visiting grandma"));
console.log(todoManager.addTodo("playing game"));
console.log(todoManager.findTodo(1));
console.log(todoManager.getTodos());
console.log("...remove...");
todoManager.removeTodo(2);
console.log(todoManager.getTodos());
console.log(".................");
//use destructuring
const { addTodo, getTodos, findTodo, removeTodo } = todoManagement();
console.log(addTodo("visiting grandma"));
console.log(addTodo("playing game"));
console.log(findTodo(1));
console.log(getTodos());
console.log("...remove...");
removeTodo(2);
console.log(getTodos());
