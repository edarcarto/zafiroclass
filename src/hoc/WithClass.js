import React from 'react';
// clase donde pasas la clase y el componente
const withClass = (WrappedComponent, className) => {
	// WrappedComponent se convirtio en spred y la forma correcta
	// de pasar parametos es ...props
	return props => (
		<div className={className}>
			<WrappedComponent {...props} />
		</div>
	)
};

export default withClass;