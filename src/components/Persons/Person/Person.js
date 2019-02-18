import React, { Component } from 'react';
import PropTypes from 'prop-types'; // importamos la nueva librería
import Aux from '../../../hoc/Auxiliary';
import withClass from '../../../hoc/withClass';
import classes from './Person.css'

class Person extends Component {
    constructor(props) {
        super(props);
        this.inputElement = React.createRef();
    }

    componentDidMount() {
        // aqui le estamos diciendo al javascript que dentro del DOM buscque un input
        // en su porpiedad parpadee el focus
        // esta forma es javascript 
        // document.querySelector('input').focus();
        // usando refs
        this.inputElement.current.focus();
    }

    render() {
        console.log('[Person.js] rendering...');
        return (
            <Aux>
                {this.props.isAuth ? <p> Authenticated! </p> : <p> please log in</p>}
                <p onClick={this.props.click}>
                    Soy {this.props.name} y tengo {this.props.age} años!
                </p>
                <p key="i2" >
                    {this.props.children}
                </p>
                <input
                    key="i3"
                    // ref={ (inputEl) => {this.inputElement = inputEl} }
                    ref={this.inputElement}
                    type="text"
                    onChange={this.props.changed}
                    value={this.props.name}
                />
            </Aux>
        );

    }
}

Person.propTypes = {
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    changed: PropTypes.func
}

export default withClass(Person, classes.Person);