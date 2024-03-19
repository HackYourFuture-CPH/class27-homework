import React, { Component } from "react";
import "./TodoList.css";

const todos = [
  {
    id: 1,
    description: "Attend family meeting",
    deadline: "Sun Mar 10 2024",
    done: false,
  },
  {
    id: 2,
    description: "Get some groceries",
    deadline: "Mon Mar 11 2024",
    done: false,
  },
  {
    id: 3,
    description: "Walk my dog",
    deadline: "Tue Mar 12 2024",
    done: false,
  },
];

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: todos,
      timer: 0,
      description: "",
      deadline: "",
    };
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      timer: this.state.timer + 1,
    });
  }

  handleInputChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  addRandomTodo = () => {
    const { description, deadline } = this.state;
    const newTodo = {
      id: Date.now(),
      description: description,
      deadline: deadline,
      done: false,
    };
    this.setState((prevState) => ({
      todos: [...prevState.todos, newTodo],
      description: "", // Reset description input after adding todo
      deadline: "", // Reset deadline input after adding todo
    }));
  };

  toggleDone = (id) => {
    this.setState((prevState) => ({
      todos: prevState.todos.map((todo) =>
        todo.id === id ? { ...todo, done: !todo.done } : todo
      ),
    }));
  };

  deleteTodo = (id) => {
    this.setState((prevState) => ({
      todos: prevState.todos.filter((todo) => todo.id !== id),
    }));
  };

  render() {
    const { todos, timer, description, deadline } = this.state;

    return (
      <div className="todo-list">
        <h2>Todo List</h2>
        <div>
          <input
            type="text"
            name="description"
            value={description}
            onChange={this.handleInputChange}
            placeholder="Enter description"
          />
          <input
            type="text"
            name="deadline"
            value={deadline}
            onChange={this.handleInputChange}
            placeholder="Enter deadline"
          />
          <button onClick={this.addRandomTodo}>Add Todo</button>
        </div>
        {todos.length === 0 ? (
          <p>No items...</p>
        ) : (
          <ul>
            {todos.map((todo) => (
              <li
                key={todo.id}
                style={{ textDecoration: todo.done ? "line-through" : "none" }}
              >
                <input
                  type="checkbox"
                  checked={todo.done}
                  onChange={() => this.toggleDone(todo.id)}
                />
                <span>{todo.description}</span>
                <span>({todo.deadline})</span>
                <button onClick={() => this.deleteTodo(todo.id)}>Delete</button>
              </li>
            ))}
          </ul>
        )}
        <div>Time spent on this website: {timer} seconds</div>
      </div>
    );
  }
}

export default TodoList;
