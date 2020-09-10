import React, { Component } from "react";

class AddTodo extends Component {
  state = {
    title: ""
  };
  handleChange = (e) => {
    this.setState({
      title: e.target.value
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addTodo(this.state.title);
    this.setState({
      title: ""
    });
  };

  render() {
    return (
      <div className="addTodo">
        <header>
          <div className="text">
            <h1>To-Do App!</h1>
            <p>You've got {this.props.list.length} items Todo</p>
          </div>
          <form className="form" onSubmit={this.handleSubmit}>
            <input
              type="text"
              className="todo-form"
              required
              value={this.state.title}
              onChange={this.handleChange}
            />
            <button className="btn" type="submit">
              Add
            </button>
          </form>
        </header>
      </div>
    );
  }
}

export default AddTodo;
