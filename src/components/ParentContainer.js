import React from 'react';
import { Container } from 'react-bootstrap';

const ParentContainer = ({ children }) => {
	return (
		<Container fluid className='px-0 parent-container d-flex flex-column'>
			{children}
		</Container>
	);
};

export default ParentContainer;
