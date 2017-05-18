import React, { Component } from 'react';
 
import Task from './Task.jsx';
 
// App component - represents the whole app
export class App extends Component {
  getTasks() {
    return [
      { _id: 1, text: 'This is task 1' },
      { _id: 2, text: 'This is task 2' },
      { _id: 3, text: 'This is task 3' },
    ];
  }
 
  renderTasks() {
    return this.getTasks().map((task) => (
      <Task key={task._id} task={task} />
    ));
  }
 
  render() {
    return (
      <div className="row">
      <div className="col s1">1</div>
      <div className="col s1">2</div>
      <div className="col s1">3</div>
      <div className="col s1">4</div>
      <div className="col s1">5</div>
      <div className="col s1">6</div>
      <div className="col s1">7</div>
      <div className="col s1">8</div>
      <div className="col s1">9</div>
      <div className="col s1">10</div>
      <div className="col s1">11</div>
      <div className="col s1">12</div>
    </div>
    );
  }
}