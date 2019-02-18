import React,{ useEffect, useRef } from 'react';
import classes from './Cockpit.css';

const cockpit = (props) => {
    // usando refs en componentes funcionales
    const tootleBtnRef = useRef(null);

    // agregando el cliclo de vida useEffect para componentes funcionales
    useEffect(() => {
        // por lo general es para manejar http request
        console.log('[cockpit.js] useEffect');
        // ejemplo "simular un http request"
        // setTimeout(() => {
        //     alert('Saved data to cloud');
        // },1000); // 1000 milisegundos
        tootleBtnRef.current.click();
        return () => {
            console.log('[cockpit.js] Cleanup en useEffect');
        }
    },[]); // acepta un segundo parametro de tipo array [props.persons]

    useEffect(() => {
        console.log('[cockpit.js] 2nd useEffect');
        return () => {
            console.log('[cockpit.js] 2nd Cleanup en useEffect');
        }
    });

    // useEffect(); puedes llamar muchos mas

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
                ref={tootleBtnRef}
                className={btnClass}
                onClick={props.clicked}>Mostar Personas</button>
            <button onClick={props.login}>Log in</button>
        </div>
    );
}

export default React.memo(cockpit);