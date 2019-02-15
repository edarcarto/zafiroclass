import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  render() {
    return (
      <div className="App">
        <p>Trabajando con Reactjs</p>
        <Person name="Gaby" age="19" />
        <Person name="Danny" age="25">
          Hobbies: : Tocar guitarra
        </Person>
        <Person name="Efren" age="24"/>
      </div>
    );
  }
}

export default App;
