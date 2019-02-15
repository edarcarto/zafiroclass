import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  // llamar a state es una variable especial de Component
  // state es un objeto y se le pueden agregar elementos
  state = {
    persons: [ //agregare persona
      { name: 'Gaby', age: 19 },
      { name: 'Danny', age: 25 },
      { name: 'Efren', age: 24 }
    ],
    otherState: 'tipo candena',
    showPersons: false
  }

  //crearemos una otra funcion para cambiar el item 1 por medio de un input 
  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        { name: 'Gaby', age: 19 },
        { name: event.target.value, age: 25 }, //event.target.value estoy capturando valor escrito en el input
        { name: 'Efren', age: 24 }
      ]
    })
  }

  togglePersonHandler = () => {
    const doesShow = this.state.showPersons;
    // porque !doesShow ? porque si es true se cambia por falso y viceversa
    this.setState({ showPersons: !doesShow });
  }

  //funcion para eliminar personas
  deletePersonHandler = (personIndex) =>{
    // almaceno el state en una variable
    const persons = this.state.persons
    // funcion splice elimina un item de array segun el index
    persons.splice(personIndex, 1);
    // actualizo el state
    this.setState({persons : persons});
  }

  render() {
    // estilo en variale
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }
    // otra forma de validar trabajando con data dinamica
    let persons = null; // declaro una variable
    if (this.state.showPersons) {
      // si showPersons es verdad inserto HTML sino es nulo
      // recorremos el estado persons con map y retornamos el componente
      persons = (
        <div >
          {this.state.persons.map((person, index) => {
            return <Person
              click={() => this.deletePersonHandler(index)}
              name={person.name}
              age={person.age}
            />
          })}
        </div>
      );
    }
    return (
      <div className="App">
        <p>Trabajando con Reactjs</p>
        <button
          style={style}
          onClick={this.togglePersonHandler}>Mostar Personas</button>
        {/* Muestro lo que contiene la variable persons */}
        {persons}
      </div>
    );
  }
}

export default App;
