import React from 'react';
import './Person.css'; // importas el css que quieras usar
//
const person = ( props ) => {
    return (
        <div className="Person"> {/* El atributo className es para asignar clases */}
            <p onClick={props.click}>Soy {props.name} y tengo {props.age} años!</p>
            {/* Con children yo puedo incluir lo que está dentro de App.js "hobbies" */}
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name }/>
        </div>
    )
}

export default person;