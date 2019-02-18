import React,{ useEffect } from 'react';
import classes from './Cockpit.css';

const cockpit = (props) => {
    // agregando el cliclo de vida useEffect para componentes funcionales
    useEffect(() => {
        console.log('[cockpit.js] useEffect')
    })

    let asignClasses = [];
    let btnClass = '';
    if(props.showPersons){
        btnClass = classes.Red;
    }
    if(props.persons.length <= 2) {
        asignClasses.push(classes.red);
    }
    if(props.persons.length <= 1) {
        asignClasses.push(classes.bold);
    }

    return (
        <div className={classes.Cockpit}>
            <h1>{props.title}</h1>
            <p className={asignClasses.join(' ')}>Trabajando con Reactjs</p>
            <button
                className={btnClass}
                onClick={props.clicked}>Mostar Personas</button>
        </div>
    );
}

export default cockpit;