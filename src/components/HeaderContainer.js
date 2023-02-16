import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { CoconutCocktail } from "@vectopus/atlas-icons-react";

const HeaderContainer = ({ spirits, setSpirits, novel, setNovel, handleSubmit }) => {
	return (
		<Container fluid className='bg-dark text-white py-4'>
			<Row className="justify-content-between align-items-center">
				<Col md="auto">
					<CoconutCocktail size={65} />
				</Col>
				<Col md="auto">
					<Form onSubmit={handleSubmit}>
						<Row className="justify-content-end align-items-end">
							<Col md="auto">
								<Form.Group controlId="formSpirits">
									<Form.Control
										type="text"
										value={spirits}
										onChange={(e) => setSpirits(e.target.value)}
										placeholder="Enter spirit(s)"
									/>
								</Form.Group>
							</Col>
							<Col md="auto">
								<Form.Group controlId="formNovel">
									<Form.Control
										type="text"
										value={novel}
										onChange={(e) => setNovel(e.target.value)}
										placeholder="Enter novel or movie"
									/>
								</Form.Group>
							</Col>
							<Col md="auto">
								<Button variant="primary" type="submit">
									Generate Recipe
								</Button>
							</Col>
						</Row>
					</Form>
				</Col>
			</Row>
		</Container>
	);
};

export default HeaderContainer;
