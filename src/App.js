import React, { Component } from 'react'
import './App.css';
import ListTodo from './components/listTodo';
import TodoController from './components/todoController';

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      todoList: [],
      isEdit: false,
      todoChoose: {
        text: '',
        key: null
      }
    }
  }

  InsertTodo = (event, newText) => {
    event.preventDefault()
    if (!newText) {
      return;
    }

    let todo = {
      text: newText,
      time: new Date()
    }
    let tempArrTodo = [...this.state.todoList];
    tempArrTodo.push(todo);
    this.setState({
      todoList: tempArrTodo
    })

  }



  EditTodo = (key) => {
    let text = this.state.todoList[key].text;
    this.setState({
      isEdit: true,
      todoChoose: {
        text: text,
        key: key
      }
    })
  }

  SaveTodo = (event, newText) => {
    event.preventDefault()
    if (!newText && !this.state.todoChoose.key) {
      return;
    }

    let todo = {
      text: newText,
      time: new Date()
    }
    let tempArrTodo = [...this.state.todoList];
    tempArrTodo.splice(this.state.todoChoose.key, 1, todo);
    this.setState({
      todoList: tempArrTodo,
      isEdit: false,
      todoChoose: {
        text: '',
        key: null
      }
    })
  }

  CancelEdit = () => {
    this.setState({
      isEdit: false,
      todoChoose: {
        text: '',
        key: null
      }
    });
  }

  RemoveTodo = (key) => {
    let tempArrTodo = [...this.state.todoList];
    tempArrTodo.splice(key, 1);
    this.setState({
      todoList: tempArrTodo
    });
  }

  render() {
    return (
      <div>

        <div className="container">
          <div className="row">
            <div className="jumbotron text-center m-auto">
              <h1 className="display-3">Todo</h1>
              <TodoController
                key={this.state.todoChoose.key}
                proTodoChoose={this.state.todoChoose}
                proIsEdit={this.state.isEdit}
                fuInsertTodo={(event, newText) => this.InsertTodo(event, newText)}
                fuSaveTodoChange={(event, newText) => this.SaveTodo(event, newText)}
                fuCancelEdit={() => this.CancelEdit()}
              />
              <hr className="my-2" />
              <p>Your todo List</p>

              <div className="todo-container">
                <ListTodo
                  proTodoChoose={this.state.todoChoose}
                  proTodoList={this.state.todoList}
                  fuEditTodo={(key) => this.EditTodo(key)}
                  fuRemoveTodo={(key) => this.RemoveTodo(key)}
                />
              </div>

            </div>
          </div>
        </div>

      </div>
    )
  }
}