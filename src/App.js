import React, { Component } from 'react';
import classes from './App.css';
import Person from './Person/Person'
// Para la unidad 14 debemos eliminar radium y usar npm run eject
class App extends Component {
  // llamar a state es una variable especial de Component
  // state es un objeto y se le pueden agregar elementos
  state = {
    // agrefamos id
    persons: [ //agregare persona
      { id: '001', name: 'Gaby', age: 19 },
      { id: '002', name: 'Danny', age: 25 },
      { id: '003', name: 'Efren', age: 24 }
    ],
    otherState: 'tipo candena',
    showPersons: false
  }

  //Ahora esta función cambiara los nombres de cada elemento cuando
  // escribas algo en el input
  nameChangedHandler = (event, id) => {
    // se agrego el evento y un id
    const personIndex = this.state.persons.findIndex(p => {
      // buscas el index y si id es igual p.id retornas el objeto
      return p.id === id
    });
    // el objeto es mutable (spred) asi que lo asignamos un objeto 
    // cuando queremos editarlo
    const person = {
      ...this.state.persons[personIndex]
    }
    // en caso no usemos ... podemos hacerlo de la siguiente manera
    // const person = Object.assign({}, this.state.persons[personIndex])
    // cambiamos el mombre que viene en el event target
    person.name = event.target.value;
    // actualizamos el array state que es mutable
    const persons = [...this.state.persons];
    // cambiamos exactamente el indice modificado
    persons[personIndex] = person;
    // set state actualizamos el state
    this.setState({
      persons: persons
    })
  }

  togglePersonHandler = () => {
    const doesShow = this.state.showPersons;
    // porque !doesShow ? porque si es true se cambia por falso y viceversa
    this.setState({ showPersons: !doesShow });
  }

  //funcion para eliminar personas
  deletePersonHandler = (personIndex) => {
    // almaceno el state en una variable
    const persons = this.state.persons
    // funcion splice elimina un item de array segun el index
    persons.splice(personIndex, 1);
    // actualizo el state
    this.setState({ persons: persons });
  }

  //Eliminando un array inmutable
  deletePersonHandler = (personIndex) => {
    // almaceno el state en una variable
    // const persons = this.state.persons
    const persons = [...this.state.persons]
    // funcion splice elimina un item de array segun el index
    persons.splice(personIndex, 1);
    // actualizo el state
    this.setState({ persons: persons });
  }

  render() {
    // hacer un boton con estilos dinamicos
    const style = {
      backgroundColor: 'green',
      color: 'white',
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
      // agregamos una key para borrar el error de consola
      // la documentacion dice que cada componente dentro de un array
      // recorrido debe tener key
      persons = (
        <div >
          {this.state.persons.map((person, index) => {
            return <Person
              click={() => this.deletePersonHandler(index)}
              name={person.name}
              age={person.age}
              key={person.id}
              changed={(event) => this.nameChangedHandler(event, person.id)}
            />
          })}
        </div>
      );
      style.backgroundColor = 'red';
    }

    let asignClasses = [classes.red, classes.bold].join(' '); // red bold

    return (
      <div className={classes.App}>
        <p className={asignClasses}>Trabajando con Reactjs</p>
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
