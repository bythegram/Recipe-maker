import React from 'react';
import { Container, Row, Col, Tabs, Tab, ProgressBar } from 'react-bootstrap';
import HomeContainer from './HomeContainer';

const RecipeContainer = ({ loading, recipe, hunt, active, setKey }) => {

	return (
		<Container className='py-4'>
			<Row className="justify-content-center">
				<Col md={6}>
					{loading && (
						<ProgressBar animated now={45} max={95} />
					)}
					<Tabs
						id="controlled-tab-example"
						activeKey={active}
						onSelect={(k) => setKey(k)}
					>
						<Tab eventKey="home" title="Home">
							<HomeContainer></HomeContainer>
							<div className="recipe bg-white p-5">
								<p>Welcome to Mix & Quest, your ultimate destination for AI-powered mixology and adventure! Prepare to embark on a unique journey that combines the art of cocktail creation with the excitement of scavenger hunts.</p>

								<p>At Mix & Quest, we believe in the power of innovation and exploration. Our cutting-edge AI technology takes mixology to new heights by generating tantalizing cocktail recipes tailored to your preferences. Whether you're a seasoned bartender or a curious enthusiast, our AI algorithms will delight your taste buds with an endless array of delightful concoctions.</p>

								<p>But that's not all! We take the concept of entertainment a step further by intertwining scavenger hunts with your cocktail experience. Get ready to unleash your inner detective as you follow our carefully crafted quests, designed to challenge your problem-solving skills while sipping on your favorite drinks. Each quest will lead you on an exciting journey through intriguing clues and hidden gems, all while enjoying the company of friends or family.</p>

								<p>Our AI mixologists have analyzed countless flavor profiles, ingredients, and mixology techniques to offer you an unparalleled experience. From classic cocktails to bold and innovative creations, we have something for every palate. With Mix & Quest, you'll discover the perfect drink for every occasion, be it a cozy night at home, a lively gathering with friends, or a celebration of life's special moments.</p>

								<p>So, whether you're looking to impress your guests with a mind-blowing cocktail or embark on an exhilarating scavenger hunt that will challenge your wits, Mix & Quest is here to elevate your experience. Join us on this extraordinary adventure, where creativity, taste, and adventure converge in perfect harmony. Get ready to mix, sip, and uncover the hidden treasures that await you. Cheers to an unforgettable journey with Mix & Quest!</p>
							</div>
						</Tab>
						{recipe && (
						<Tab eventKey="recipe" title="Recipe">
							<div className="recipe bg-white p-5"
								dangerouslySetInnerHTML={{ __html: recipe.trim() }}></div>
						</Tab>
						)}
						{hunt && (
							<Tab eventKey="hunt" title="Scavenger Hunt">
								<div className="recipe bg-white p-5"
									dangerouslySetInnerHTML={{ __html: hunt.trim() }}></div>
							</Tab>
						)}
					</Tabs>
				</Col>
			</Row>
		</Container>
	);
};

export default RecipeContainer;
