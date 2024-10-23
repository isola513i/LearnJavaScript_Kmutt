class Todo {
  static runningID = 1;
  constructor(desc) {
    this.id = Todo.runningID++;
    this.description = desc;
  }
  getTodo() {
    return { id: this.id, description: this.description };
  }
  setDescription(Desc) {
    this.description = Desc;
  }
}
const todo1 = new Todo("read book");
const todo2 = new Todo("shopping");
console.log(todo1.getTodo());
todo2.setDescription("buy milk");
console.log(todo2.getTodo());
