const Todo = require("./todo.js");

function todoManagement() {
	const todos = [];

	function addTodo(desc) {
		const newTodo = new Todo(undefined, desc);
		todos.push(newTodo);
		return newTodo.id;
	}

	function findTodo(searchId) {
		return todos.find((todo) => todo.id === searchId);
	}

	function findIndexTodo(searchId) {
		return todos.findIndex((todo) => todo.id === searchId);
	}

	function removeTodo(removeId) {
		const foundIndex = findIndexTodo(removeId);
		todos.splice(foundIndex, 1);
	}

	function getTodos() {
		return todos;
	}

	function getNumberOfDone() {
		return todos.filter((todo) => todo.done).length;
	}

	function getNumberOfNotDone() {
		return todos.filter((todo) => !todo.done).length;
	}

	function clearTodo() {
		todos.length = 0;
	}

	return {
		addTodo,
		findTodo,
		removeTodo,
		getTodos,
		getNumberOfDone,
		getNumberOfNotDone,
		clearTodo,
	};
}
