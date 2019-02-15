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
    ],
    otherState: 'tipo candena'
  }

  //declarar un función para botón (arrow function)
  switchNameHandler = (namePerson) => { // ocurrira en el evento click
    // console.log("Was clicked")
    // NO UTILICES ESO PARA CAMBIAR AL STATE this.state.persons[2].name = "Eduardo"
    this.setState({ // utilizamos setState para cambiar un state y recibe un objeto
      persons: [ //copiamos el array y cambiamos solo donde queremos
        { name : 'Gaby', age: 19 },
        { name : 'Danny', age: 25 },
        { name : namePerson, age: 24 } // cambie Efren a Eduardo
      ]
    })
  }

  render() {
    return (
      <div className="App">
        <p>Trabajando con Reactjs</p>
        {/* No uses los parentesis al llamarlo lo ejecuras si haces eso */}
        <button onClick={() => this.switchNameHandler('Eduardo') }>Cambiar de Nombre</button>
        <Person 
          name={this.state.persons[0].name} 
          age={this.state.persons[0].age} 
        />
        {/* Ahora cuando de click aqui se cambiará el item 2 */}
        <Person 
          name={this.state.persons[1].name}
          age={this.state.persons[1].age} 
          click={this.switchNameHandler.bind(this,"Isai!")}
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
}

export default App;
