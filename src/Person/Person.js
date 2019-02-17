import React from 'react';
import classes from './Person.css';

const person = ( props ) => {
    // vamos a declarar un contante que tendra como valor un número
    const rnd = Math.random();
    // preguntamos si es mayor que 0.7 el la constante
    if(rnd > 0.7){
        // si es verdad retornas un throw new Error (prueba dando click en mostar)
        throw new Error('Se encontró un error!')
    }
    return (
        <div className={classes.Person}>
            <p onClick={props.click}>Soy {props.name} y tengo {props.age} años!</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name }/>
        </div>
    )
}

export default person;