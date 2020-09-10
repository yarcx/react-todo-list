import React, { Component } from "react";
import List from "./list";

class TodoList extends Component {
  render() {
    return (
      <div className="todo-list">
        <h1>Todo List</h1>
        {
          this.props.list.length ? (
            <List
              list={this.props.list}
              deleteTodo={this.props.deleteTodo}
              editTodo={this.props.editTodo}
            />
          ) : (
              <div className="list" >
                <li >Yay!!... You've got nothing left todo</li>
              </div>
            )}
      </div>
    );
  }
}

export default TodoList;
