const { v4: uuidv4 } = require("uuid");

class Todo {
  constructor(title, deadline) {
    this.title = title;
    this.deadline = new Date(deadline);
    this.id = uuidv4();
    this.done = false;
    this.created_at = new Date();
  }
}

exports.Todo = Todo;
