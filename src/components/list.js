import React, { Component } from "react";

class List extends Component {
  render() {
    const x = this.props.list.map((ele) => {
      return (
        <div className="list" key={ele.id}>
          <li contentEditable={ele.edit}>{ele.text}</li>
          <div className="myBtns">
            <div
              className="edit btn"
              onClick={() => {
                let edited = (ele.edit = !ele.edit);
                this.props.editTodo(edited);
              }}
            >
              Edit
            </div>

            <div
              className="delete btn"
              onClick={() => {
                this.props.deleteTodo(ele.id);
              }}
            >
              Delete
            </div>
          </div>
        </div>
      );
    });
    return <div>{x}</div>;
  }
}

export default List;
