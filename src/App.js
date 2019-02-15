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

  //declarar un función para botón (arrow function)
  switchNameHandler = (namePerson) => { // ocurrira en el evento click
    // console.log("Was clicked")
    // NO UTILICES ESO PARA CAMBIAR AL STATE this.state.persons[2].name = "Eduardo"
    this.setState({ // utilizamos setState para cambiar un state y recibe un objeto
      persons: [ //copiamos el array y cambiamos solo donde queremos
        { name: 'Gaby', age: 19 },
        { name: 'Danny', age: 25 },
        { name: namePerson, age: 24 } // cambie Efren a Eduardo
      ]
    })
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
      persons = (
        <div >
          <Person
            name={this.state.persons[0].name}
            age={this.state.persons[0].age}
          />
          <Person
            name={this.state.persons[1].name}
            age={this.state.persons[1].age}
            click={this.switchNameHandler.bind(this, "Isai!")}
            changed={this.nameChangedHandler}
          >
            Hobbies: Tocar guitarra
            </Person>
          <Person
            name={this.state.persons[2].name}
            age={this.state.persons[2].age}
          />
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
