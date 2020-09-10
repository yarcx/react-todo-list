import React, { Component } from "react";
import AddTodo from "./components/addTodo";
import TodoList from "./components/todoList";
import "./styles.css";

class App extends Component {
  state = {
    list: [
      { id: 1, text: "here we go again", edit: false },
      { id: 2, text: "here we go again", edit: false },
      { id: 3, text: "here we go again", edit: false }
    ]
  };

  addTodo = (title) => {
    const id = Math.floor(Math.random() * 1000);
    const newList = [...this.state.list, { id: id, text: title }];
    this.setState({
      list: newList
    });
  };

  deleteTodo = (id) => {
    const newList = this.state.list.filter((ele) => {
      return ele.id !== id;
    });

    this.setState({
      list: newList
    });
  };

  editTodo = (edit) => {
    this.state.list.map((ele) => {
      if (ele.edit === true) {
        return ele;
      }
      return ele;
    });
  };

  render() {
    return (
      <div className="App">
        <AddTodo addTodo={this.addTodo} list={this.state.list} />
        <TodoList
          list={this.state.list}
          deleteTodo={this.deleteTodo}
          editTodo={this.editTodo}
        />
      </div>
    );
  }
}

export default App;
