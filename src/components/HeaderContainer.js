import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Container, Row, Col, Form, Button, Offcanvas } from 'react-bootstrap';
import { CoconutCocktail } from "@vectopus/atlas-icons-react";

/**
 * Header Container Component
 */
const HeaderContainer = ({ spirits, setSpirits, novel, setNovel, handleSubmit }) => {
	const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	return (
		<Container fluid className='bg-dark text-white py-4'>
			<Row className="justify-content-between align-items-center">
				<Col md="auto">
					<CoconutCocktail size={65} />
				</Col>
				<Col md="auto">
					<Button variant="primary" onClick={handleShow}>
						Launch
					</Button>

					<Offcanvas show={show} onHide={handleClose} placement="bottom" className='bg-dark text-white'>
						<Offcanvas.Body>
							<Form onSubmit={handleSubmit}>
								<Row className="justify-content-center align-items-center">
									<Col md="5">
										<Form.Group controlId="formSpirits">
											<Form.Control
												type="text"
												value={spirits}
												onChange={(e) => setSpirits(e.target.value)}
												placeholder="Enter spirit(s)"
											/>
										</Form.Group>
									</Col>
									<Col md="5">
										<Form.Group controlId="formNovel">
											<Form.Control
												type="text"
												value={novel}
												onChange={(e) => setNovel(e.target.value)}
												placeholder="Inspiration (movie, novel, location etc)"
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
						</Offcanvas.Body>
					</Offcanvas>
				</Col>
			</Row>
		</Container>
	);
};

HeaderContainer.propTypes = {
	/**
	 * The users chosen spirits
	 */
	spirits: PropTypes.string,

	/**
	 * Action to set the spirits
	 */
	setSpirits: PropTypes.func,
}

export default HeaderContainer;
