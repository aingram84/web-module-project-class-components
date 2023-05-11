import React from 'react'
import Todo from './Todo';
import Form from './Form';
import TodoList from './TodoList';

const todoList = [{
  name: "blah",
  id: 123,
  completed: false
}];

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todoList: todoList
    }
  }

  addToDoItem = (event, todoItem) => {
    event.preventDefault();
    const newToDoList = {
      name: todoItem,
      id: Date.now(),
      completed: false
    }
    this.setState({
      ...this.state, todoList: [...this.state.todoList, newToDoList]
    })
  }

  clearCompleted = () => {
    this.setState({
      ...this.state, todoList: this.state.todoList.filter((toDoListItem) => {
        if (!toDoListItem.completed) return toDoListItem;
      }),
    })
  }

  toggleItem = (itemID) => {
    console.log(itemID)
    this.setState({
      ...this.state, todoList: this.state.todoList.map((toDoListItem) => {
        if (itemID === toDoListItem.id) {
          console.log(`${toDoListItem.name} is completed: ${toDoListItem.completed}`)
          return {
            ...toDoListItem, completed: !toDoListItem.completed
          }
        }
        console.log(`${toDoListItem.name} is completed: ${toDoListItem.completed}`)
        console.log(toDoListItem);
        return toDoListItem;
      })
    })
  }

  render() {
    return (
      <div>
        <div className="App">
          <Form addToDoItem={this.addToDoItem} />
        </div>
        <TodoList toggleItem={this.toggleItem} todoList={this.state.todoList} />
        <button onClick={this.clearCompleted}>beep</button>
      </div>
    )
  }
}
