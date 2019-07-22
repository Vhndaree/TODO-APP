import React from "react";

class AddTodoItem extends React.Component {
  state = {
    title: ""
  };

  addTodo = (e) => {
    e.preventDefault();
    this.props.addTodo(this.state.title);

    this.resetState();
  }

  resetState = () => {
    this.setState({
      title: ""
    });
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <form className="add-form clear-fix" onSubmit={this.addTodo}>
        <input
          type="text"
          name="title"
          onChange={this.handleChange}
          value={this.state.title}
          className="input-title"
          placeholder="Add Todos..."
        />
        <button type="submit" className="btn add-todo">
          <i className="fa fa-plus" aria-hidden="true"></i>
        </button>
      </form>
    );
  }
}

export default AddTodoItem;
