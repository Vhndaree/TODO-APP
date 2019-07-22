import React from "react";

import TodoItem from "./TodoItem";

class Todos extends React.Component {
  listTodos = () => {
    if (this.props.todos.length) {
      return this.props.todos.map(todo => (
        <TodoItem
          key={todo.id}
          todo={todo}
          toggleCompleted={this.props.toggleCompleted}
          deleteTodo={this.props.deleteTodo}
          toggleStar={this.props.toggleStar}
        />
      ));
    } else {
      return (
        <li className="empty-todo" style={{textAlign: "center"}}>
          There are no todo list for now......
        </li>
      );
    }
  };
  render() {
    return (
      <div className="todolist-wrapper clear-fix">
        <ul>
          {this.listTodos()}
        </ul>
      </div>
    );
  }
}

export default Todos;
