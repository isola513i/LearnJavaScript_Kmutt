class Todo {
	static runningID = 1;
	constructor(description, id = undefined, done = false) {
		this.id = id ?? runningID++;
		this.description = description;
		this.done = done;
	}
	getTodo() {
		return { id: this.id, description: this.description };
	}
	setDescription(desc) {
		this.description = desc;
	}
	setDone(status) {
		this.done = status;
	}
}

module.exports = Todo;
