import React from "react";

import "./App.css";
import "./style/reset.css";
import "./style/style.css";
import Tabs from "./components/todos/Tabs"
import Todos from "./components/todos/Todos";
import Header from "./components/layout/Header";
import AddTodoItem from "./components/todos/AddTodoItem";

class App extends React.Component {
  state = {
    searchKey: '',
    completed: false,
    remaining: false,
    starredOnly: false,
    todos: [],
  };

  resetFlags = () => {
    this.setState({
      completed: false,
      remaining: false,
      starredOnly: false,
    });
  }

  addTodo = (newTitle) => {
    const newTodo = {
      id: Date.now(),
      title: newTitle,
      completed: false,
      starred: false
    };
    if (newTitle && newTitle.trim().length)
      this.setState({ todos: [newTodo, ...this.state.todos] });
  };

  toggleCompleted = (id) => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }

        return todo;
      })
    });
  };

  deleteTodo = (id) => {
    this.setState({
      todos: [...this.state.todos.filter(todo => todo.id !== id)]
    });
  };

  toggleStar = (id) => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          todo.starred = !todo.starred;
        }

        return todo;
      })
    });
  }

  handleSearch = (searchKeys) => {

    this.setState({
      searchKey: searchKeys.trim(),
    });
  };

  handleTabs = (e) => {
    this.resetFlags();

    if (e.target.innerText.toLowerCase() === 'important') {
      this.setState({ starredOnly: true });
    }

    if (e.target.innerText.toLowerCase() === 'completed') {
      this.setState({ completed: true });
    }

    if (e.target.innerText.toLowerCase() === 'remaining') {
      this.setState({ remaining: true });
    }
  };

  getTodoList = () => {

    let displayTodos = this.state.todos;

    if (this.state.searchKey && this.state.searchKey.length) {
      displayTodos = this.state.todos.filter((todo) => (todo.title.toUpperCase().includes(this.state.searchKey.toUpperCase())));

      displayTodos = this.getTodoListsOnFlag(displayTodos);
    } else {
      displayTodos = this.getTodoListsOnFlag(displayTodos);
    }

    return displayTodos;
  };

  getTodoListsOnFlag = (displayTodos) => {
    if (this.state.starredOnly) {
      displayTodos = displayTodos.filter((todo) => (todo.starred === true));
    }

    if (this.state.completed) {
      displayTodos = displayTodos.filter((todo) => (todo.completed === true));
    }

    if (this.state.completed) {
      displayTodos = displayTodos.filter((todo) => (todo.completed === true));
    }

    if (this.state.remaining) {
      displayTodos = this.state.todos.filter((todo) => (todo.completed !== true));
    }

    return displayTodos;
  }

  render() {
    let displayTodos = this.getTodoList();
    return (
      <div className="App">
        <div className="container">
          <Header handleSearch={this.handleSearch} />
          <Tabs
            handleTabs={this.handleTabs}
            state={this.state}
          />
          <AddTodoItem addTodo={this.addTodo} />
          <Todos
            todos={displayTodos}
            toggleCompleted={this.toggleCompleted}
            deleteTodo={this.deleteTodo}
            toggleStar={this.toggleStar}
          />
        </div>
      </div>
    );
  }
}

export default App;
