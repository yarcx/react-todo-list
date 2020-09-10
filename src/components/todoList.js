import React, { Component } from "react";
import List from "./list";

class TodoList extends Component {
  render() {
    return (
      <div className="todo-list">
        <h1>Todo List</h1>
        <List
          list={this.props.list}
          deleteTodo={this.props.deleteTodo}
          editTodo={this.props.editTodo}
        />
      </div>
    );
  }
}

export default TodoList;
