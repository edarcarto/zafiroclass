import React, {Component} from 'react';

class ErrorBoundary extends Component {
    state = {
        hasError: false,
        errorMessage: ''
    }

    // vamos a declarar una función de react para detectar errors en componentes
    componentDidCatch = (error, info) => {
        // actualizamos el estado a verdad y mostramos el mensaje mandado por error
        this.setState({hasError : true, errorMessage: error });
    }

    render() {
        // si hau mensaje se muestra
        if ( this.state.hasError ) {
            return <h1>{this.props.errorMessage}</h1>;
        }
        // si no continua el proceso
        return this.props.children;
    }

}
export default ErrorBoundary;