import React from 'react';

// react.createContext acepta un objeto
// se puede pasar tanto un string como una funcion
const authContext = React.createContext({
	authenticated: false,
	login: () => {}
});

export default authContext;