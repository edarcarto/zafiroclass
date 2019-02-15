import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  // llamar a state es una variable especial de Component
  // state es un objeto y se le pueden agregar elementos
  state = {
    persons: [ //agregare persona
      { name : 'Gaby', age: 19 },
      { name : 'Danny', age: 25 },
      { name : 'Efren', age: 24 }
    ]
  }
  render() {
    return (
      <div className="App">
        <p>Trabajando con Reactjs</p>
        <button>Cambiar de Nombre</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age} >
          Hobbies: Tocar guitarra
        </Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age} />
      </div>
    );
  }
}

export default App;
