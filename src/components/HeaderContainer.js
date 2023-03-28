import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Container, Row, Col, Form, Button, Offcanvas, FloatingLabel } from 'react-bootstrap';
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
				<Col md="auto" xs="auto" sm="auto">
					<CoconutCocktail size={45} />
				</Col>
				<Col xs="auto" sm="auto" md="auto">
					<Button variant="primary" onClick={handleShow} className="text-light">
						Launch
					</Button>

					<Offcanvas show={show} onHide={handleClose} placement="end" className='bg-dark text-white'>
						<Offcanvas.Body>
							<Form onSubmit={handleSubmit} className="h-100">
								<Row className="">
									<Col md="12" className='mb-3'>
										<FloatingLabel
											controlId="formSpirits"
											label="Spirit(s)"
											className="mb-3"
										>
											<Form.Control
												type="text"
												value={spirits}
												onChange={(e) => setSpirits(e.target.value)}
												placeholder="Enter spirit(s)"
											/>
										</FloatingLabel>
									</Col>
									<Col md="12" className='mb-3'>
										<FloatingLabel
											controlId="formNovel"
											label="Inspiriation"
											className="mb-3"
										>
											<Form.Control
												type="text"
												value={novel}
												onChange={(e) => setNovel(e.target.value)}
												placeholder="Inspiration (movie, novel, location etc)"
											/>
										</FloatingLabel>
									</Col>
									<Col md="12">
										<Button variant="primary" type="submit" onClick={handleClose} className="text-light">
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
