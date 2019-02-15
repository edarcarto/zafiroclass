import React from 'react';

const person = ( props ) => {
    return (
        <div>
            <p>Soy {props.name} y tengo {props.age} años!</p>
            {/* Con children yo puedo incluir lo que está dentro de App.js "hobbies" */}
            <p>{props.children}</p>
        </div>
    )
}

export default person;