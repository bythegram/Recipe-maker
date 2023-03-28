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
				{(!recipe && !loading) && (
					<Col md={6}>
						<p className="recipe">
							Hello! Welcome to a fun little project that will let you create endless cocktail recipes inspired by your favourite novels, movies, locations or really whatever you can imagine.
							<br />
							Just click "Launch" and enter some spirits, an inspiration and let AI do the rest.
							<br />
							Cheers!
						</p>
					</Col>
				)}
			</Row>
		</Container>
	);
};

export default RecipeContainer;
