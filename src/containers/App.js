import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons'
import Cockpit from '../components/Cockpit/Cockpit';
import withClass from '../hoc/withClass';
import Aux from '../hoc/Auxiliary';
// Para la unidad 14 debemos eliminar radium y usar npm run eject
class App extends Component {
  // vamosa a llamar al constructor
  constructor(props) {
    super(props);
    console.log('[App.js] constructor');
  }
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
    showPersons: false,
    showCockpit: true
  }
  // clase statica del ciclo de vida reactjs getDerivedStateFromProps
  // Este metodo sustituye a componentWillMountReciveProps
  // se llama despues de que el componente sea instanciado
  // Habilita un componente a actualizarse e internamente el resultado
  // lo cambia en props
  static getDerivedStateFromProps(props, state) {
    console.log('[App.js] getDerivedStateFromProps', props);
    return state;
  }

  // ciclo de vida componentWillMount
  // Este metodo se utiliza antes del primer renderizado
  // componentWillMount() {
  //  console.log('[App.js] componentWillMount');
  // }

  // ciclo de vida componentDidMount
  // Este metodo se utiliza despues del primer renderizado
  // puedes usarlo para llamar ajax, setear intervalos etc
  componentDidMount() {
    console.log('[App.js] componentDidMount');
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('[App.js] shouldComponentUpdate');
    return true; // si lo cambias a falso el click no funcionará
  }
  componentDidUpdate() {
    console.log('[App.js] componentDidUpdate');
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
    console.log('[App.js] render');
    // otra forma de validar trabajando con data dinamica
    let persons = null; // declaro una variable
    if (this.state.showPersons) {
      // si showPersons es verdad inserto HTML sino es nulo
      // recorremos el estado persons con map y retornamos el componente
      // agregamos una key para borrar el error de consola
      // la documentacion dice que cada componente dentro de un array
      // recorrido debe tener key
      persons = (
        <Persons 
        persons={this.state.persons}
        clicked={this.deletePersonHandler}
        changed={this.nameChangedHandler}/>
      );
    }

    return (
      <Aux>
      <button onClick={() => this.setState({ showCockpit: false })} >Eliminar Cockpit</button>
      {this.state.showCockpit ? <Cockpit
        title={this.props.appTitle} 
        showPersons={this.state.showPersons}
        persons={this.state.persons}
        clicked={this.togglePersonHandler} /> : null }
        {/* Muestro lo que contiene la variable persons */}
        {persons}
      </Aux>
    );
  }
}

export default withClass(App,classes.App);
