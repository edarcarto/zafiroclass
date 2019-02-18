import React, { Component } from 'react';
import Aux from '../../../hoc/Aux';

class Person extends Component {
    render() {
        console.log('[Person.js] rendering...');
        return (
            <Aux>
                <p onClick={this.props.click}>
                    Soy {this.props.name} y tengo {this.props.age} años!
                </p>
                <p>
                    {this.props.children}
                </p>
                <input
                    type="text"
                    onChange={this.props.changed}
                    value={this.props.name}
                />
            </Aux>
        );

    }
}

export default Person;