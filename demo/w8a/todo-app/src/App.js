import React from 'react';
import './App.css';
import todoList from './todoList.json';

// Filter the list based on checkbox
// Add an Input Form to allow creating todo items with content + priority
// Have each item be able to remove itself using a function passed in from the parent

function TodoItem(props) {
  return <p className='card' onClick={() => props.removeTask(props.id)}>{props.content}</p>
}

class TodoList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      todoList,
      hide: false,
    }
    this.currentId = 4;
  }

  addTask(e) {
    console.log(this.refs.taskContent)
    let todoList = this.state.todoList
    todoList.push(
      {"id": this.currentId, "content": this.refs.taskContent.value, "priority": 1, "completed": true}
    )
    this.currentId++
    this.setState({todoList})
  }

  removeTask(id) {
    console.log(id)
    let todoList = this.state.todoList
    console.log(todoList)
    todoList = todoList.filter((v) => v.id !== id)
    console.log(todoList)
    this.setState({todoList})
  }

  render() {
    return (
      <React.Fragment>
        <input type="text" ref="taskContent" />
        <input type="button" value="Add Task" onClick={(e) => this.addTask(e)}/>
        <input ref="hideCheckbox" type="checkbox" name="hide" id="hide" value="hide" 
          onChange={(e) => this.setState({hide: e.target.checked})}/>
        <label htmlFor="hide"> Poooop</label><br></br>
  
        { ((this.state.hide) ? this.state.todoList
          .filter((v) => !v.completed) : this.state.todoList)
          .map ((v) => <TodoItem 
            id = {v.id}
            removeTask ={(id) => this.removeTask(id)}
            priority={v.priority} 
            key = {v.id}
            content={v.content} 
            completed={v.completed} 
            />) 
        }
      </React.Fragment>
    )
  } 
}

function App(props) {
  return (
    <TodoList />
  )
}

export default App;
