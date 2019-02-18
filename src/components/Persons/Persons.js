import React, { Component } from 'react';
import Person from './Person/Person';

class Persons extends Component {
    // clase statica del ciclo de vida reactjs getDerivedStateFromProps
    // static getDerivedStateFromProps(props, state) {
    // console.log('[Persons.js] getDerivedStateFromProps', props);
    //    return state;
    // }

    // componentWillReceiveProps(props) {
    //    console.log('[Persons.js] getDerivedStateFromProps', props);
    // }

    // Metodo shouldComponentUpdate para actulizar por lo general 
    // devuelve un boleano (true, false)
    shouldComponentUpdate(nextProps, nextState) {
        console.log('[Persons.js] shouldComponentUpdate');
        return true;
    }

    // Metodo getSnapshotBeforeUpdate se ejecuta despues del render y antes de componentDidUpdate
    // el valor regresa la ejecucion de este método se convirte en el tercer parametro llamado snarshot
    // de componentDidUpdate este metodo puede regresar un valor o null soi no es asi te mostrara un warning
    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('[Persons.js] getSnapshotBeforeUpdate');
        return {message : 'Snapshot!'};
    }

    // componentWillMount() {

    // }

    // Metodo componentDidUpdate se ejecuta en la actualización
    // exactamente despues que se actualiza el componente
    // se pueden hacer cambios de parametos , propiedades y estados
    componentDidUpdate(prevProps, prevState, Snapshot) {
        console.log('[Persons.js] componentDidUpdate');
        console.log(Snapshot);
    }

    componentWillUnmount() {
        console.log('[Persons.js] componentWillUnmount');
    }

    render() {
        console.log('[Persons.js] rendering...');
        return this.props.persons.map((person, index) => {
            return (<Person
                click={() => this.props.clicked(index)}
                name={person.name}
                age={person.age}
                key={person.id}
                changed={(event) => this.props.changed(event, person.id)}
            />);
        });
    }
}

export default Persons;