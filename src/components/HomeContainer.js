import React from 'react';
import { Container } from 'react-bootstrap';

const HomeContainer = ({ children }) => {
	return (
		<Container fluid className='px-0 home-container d-flex flex-column'>
			<img src="/Recipe-Maker/hero.png" alt="hero" />
			<h1 class="text-center">Embark on a Mixology Adventure</h1>
			<p class="text-center">Join us for a unique journey</p>
		</Container>
	);
};

export default HomeContainer;