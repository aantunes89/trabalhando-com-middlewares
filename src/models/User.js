const { v4: uuidv4 } = require("uuid");

class User {
  constructor(name, username) {
    this.name = name;
    this.username = username;
    this.todos = [];
    this.id = uuidv4();
  }
}
exports.User = User;
