import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Container, Row, Col, Form, Button, Offcanvas, FloatingLabel, InputGroup } from 'react-bootstrap';
import { CoconutCocktail, SearchMap } from "@vectopus/atlas-icons-react";

/**
 * Header Container Component
 */
const HeaderContainer = ({ spirits, setSpirits, novel, setNovel, handleSubmit, locations, setLocations, handleSubmitHunt }) => {
	const [showDrink, setShowDrink] = useState(false);
	const handleCloseDrink = () => setShowDrink(false);
	const handleShowDrink = () => setShowDrink(true);

	const [showHunt, setShowHunt] = useState(false);
	const handleCloseHunt = () => setShowHunt(false);
	const handleShowHunt = () => setShowHunt(true);

	const handleInputChange = (index, event) => {
		const newInputs = [...locations];
		newInputs[index] = event.target.value;
		setLocations(newInputs);
	};

	const handleAddInput = () => {
		setLocations([...locations, '']);
	};

	const handleRemoveInput = (index) => {
		const newInputs = [...locations];
		newInputs.splice(index, 1);
		setLocations(newInputs);
	};


	const handleSpiritChange = (index, event) => {
		const newInputs = [...spirits];
		newInputs[index] = event.target.value;
		setSpirits(newInputs);
	};

	const handleAddSpirit = () => {
		setSpirits([...spirits, '']);
	};

	const handleRemoveSpirit = (index) => {
		const newInputs = [...spirits];
		newInputs.splice(index, 1);
		setSpirits(newInputs);
	};

	return (
		<Container fluid className='py-4 sticky-top'>
			<Row className="justify-content-end align-items-center">
				<Col xs="auto" sm="auto" md="auto" className='px-0'>
					<Button variant="primary" onClick={handleShowDrink} className="text-light d-block" aria-label="Cocktail generator">
						<CoconutCocktail size={45} />
					</Button>
					<Button variant="primary" onClick={handleShowHunt} className="text-light d-block" aria-label="Scavenger Hunt generator">
						<SearchMap size={45} />
					</Button>

					<Offcanvas show={showDrink} onHide={handleCloseDrink} placement="end" className='bg-dark text-white'>
						<Offcanvas.Body>
							<p>Create a custom cocktail. Simply add some spirits and an inspiration, let AI build the rest!</p>

							<Form onSubmit={handleSubmit} className="h-100">
								<Row className="">
									{spirits.map((input, index) => (
										<Col md="12" key={index}>
											<InputGroup className="mb-3">
												<FloatingLabel
													controlId={'spiritInput' + index}
													label={'Spirit ' + (index + 1)}
												>
													<Form.Control
														type="text"
														value={input}
														onChange={(event) => handleSpiritChange(index, event)}
														placeholder="Enter spirit"
													/>
												</FloatingLabel>
												{index > 0 && (
													<InputGroup.Text>
														<button type="button" onClick={() => handleRemoveSpirit(index)}>
															-
														</button>
													</InputGroup.Text>

												)}
											</InputGroup>
										</Col>
									))}
									<Col md="12" className='mb-3'>
										<Button variant='primary' className='w-100' onClick={handleAddSpirit}>
											+
										</Button>
									</Col>
									<Col md="12" className='mb-3'>
										<FloatingLabel
											controlId="formNovel"
											label="Inspiration (movie, novel, location etc)"
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
										<Button variant="primary" type="submit" onClick={handleCloseDrink} className="text-light">
											Generate Recipe
										</Button>
									</Col>
								</Row>
							</Form>
						</Offcanvas.Body>
					</Offcanvas>
					<Offcanvas show={showHunt} onHide={handleCloseHunt} placement="end" className='bg-dark text-white'>
						<Offcanvas.Body>
							<p>Create a custom scavenger hunt. Simply add some locations and an inspiration, let AI build the rest!</p>
							<Form onSubmit={handleSubmitHunt} className="h-100">
								<Row className="">
									{locations.map((input, index) => (
									<Col md="12" key={index}>
										<InputGroup className="mb-3">
											<FloatingLabel
												controlId={'locationInput'+index}
												label={'Location ' + (index+1) }
											>
												<Form.Control
													type="text"
													value={input}
													onChange={(event) => handleInputChange(index, event)}
													placeholder="Enter location"
												/>
											</FloatingLabel>
												{index > 0 && (
													<InputGroup.Text>
														<button type="button" onClick={() => handleRemoveInput(index)}>
															-
														</button>
													</InputGroup.Text>

												)}
										</InputGroup>
									</Col>
									))}
									<Col md="12" className='mb-3'>
									<Button variant='primary' className='w-100' onClick={handleAddInput}>
										+
									</Button>
									</Col>
									<Col md="12" className='mb-3'>
										<FloatingLabel
											controlId="formNovel"
											label="Inspiration (movie, novel, location etc)"
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
										<Button variant="primary" type="submit" onClick={handleCloseHunt} className="text-light">
											Generate Scavenger Hunt
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
