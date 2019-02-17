import React from 'react';
import './Person.css'; // importas el css que quieras usar
import Radium from 'radium';

const person = ( props ) => {
    // ahora vamos a agregar un media query como parametro constante
    // pero vamos a usar radium para poderlo ver reflejado
    // iremos a App.js y importaremos la libreria StyleRoot
    // porque si lo ponemos directamente style={style} dara error
    const style = {
        '@media(min-width: 500px)' : {
            width: '450px'            
        }
    }
    return (
        <div className="Person" style={style}> {/* El atributo className es para asignar clases */}
            <p onClick={props.click}>Soy {props.name} y tengo {props.age} años!</p>
            {/* Con children yo puedo incluir lo que está dentro de App.js "hobbies" */}
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name }/>
        </div>
    )
}

export default Radium(person);