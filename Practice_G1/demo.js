// Todo class definition
class Todo {
  constructor(id, description) {
    this.id = id; // unique id
    this.description = description; // todo detail
  }

  // Method to return the Todo object {id, description}
  getTodo() {
    return { id: this.id, description: this.description };
  }

  // Method to update the description of the todo
  setDescription(newDescription) {
    this.description = newDescription;
  }
}

// TodoList Management functions
class TodoList {
  constructor() {
    this.todos = []; // stores all todos in array
  }

  // Function to add a new todo to the list
  // Returns the new length of the array
  addTodo(desc) {
    const newId = this.todos.length + 1; // Generate new unique id
    const newTodo = new Todo(newId, desc);
    this.todos.push(newTodo);
    return this.todos.length;
  }

  // Function to find a todo by id, returns the todo object if found
  findTodo(searchId) {
    return this.todos.find((todo) => todo.id === searchId);
  }

  // Function to find the index of a todo by id
  findIndexTodo(searchId) {
    return this.todos.findIndex((todo) => todo.id === searchId);
  }

  // Function to remove a todo by id, returns the removed todo or undefined if not found
  removeTodo(removeId) {
    const index = this.findIndexTodo(removeId);
    if (index !== -1) {
      return this.todos.splice(index, 1)[0]; // Removes and returns the removed todo
    }
    return undefined; // If todo not found
  }

  // Function to return the entire list of todos
  getTodos() {
    return this.todos;
  }
}

// Example usage:
const todoList = new TodoList();

// Adding todos
todoList.addTodo("Learn JavaScript");
todoList.addTodo("Complete TodoList project");

// Retrieving all todos
console.log(todoList.getTodos());

// Finding a todo
console.log(todoList.findTodo(1));

// Removing a todo
console.log(todoList.removeTodo(2));

// Display updated todos
console.log(todoList.getTodos());
