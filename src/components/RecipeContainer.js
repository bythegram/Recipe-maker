import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const RecipeContainer = ({ loading, recipe }) => {
	return (
		<Container className='py-4'>
			<Row className="justify-content-center">
				{loading && (
					<Col md={6}>mixing your cocktail...</Col>
				)}
				{recipe && (
					<Col md={6}>
						<p className="recipe"
							dangerouslySetInnerHTML={{ __html: recipe.trim() }}></p>
					</Col>
				)}
			</Row>
		</Container>
	);
};

export default RecipeContainer;
