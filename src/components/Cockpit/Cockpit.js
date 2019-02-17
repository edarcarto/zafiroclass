import React from 'react';
import classes from './Cockpit.css';

const cockpit = (props) => {
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
            <p className={asignClasses.join(' ')}>Trabajando con Reactjs</p>
            <button
                className={btnClass}
                onClick={props.clicked}>Mostar Personas</button>
        </div>
    );
}

export default cockpit;