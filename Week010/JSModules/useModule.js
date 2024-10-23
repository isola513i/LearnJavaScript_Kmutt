//useModule.js
//1. use destructuring when importing
// const { addTodo, getTodos } = require('./todoManagement.js')
// console.log(addTodo('grading exam'))
// console.log(getTodos())

//2. not use destructuring when importing
const todoManager = require("./todoManagement.js");
console.log(todoManager.addTodo("grading exam"));
console.log(todoManager.getTodos());

//todoManagement.js
const { Todo } = require("./libs/Todo.js");
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

const { addTodo, getTodos } = todoManagement();
module.exports = { addTodo, getTodos }; //export 2 functions with object syntax
