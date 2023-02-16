import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const FooterContainer = () => {
	return (
		<Container fluid className='mt-auto'>
			<Row className='justify-content-end'>
				<Col md="auto">
					<p><em>Recipes are generated via OpenAI</em></p>
				</Col>
			</Row>
		</Container>
	);
};

export default FooterContainer;
