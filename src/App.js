import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import { CoconutCocktail } from "@vectopus/atlas-icons-react";
import './App.scss';
import generateRecipe from './generateRecipe';

const CocktailForm = () => {
  const [spirits, setSpirits] = useState('');
  const [novel, setNovel] = useState('');
  const [recipe, setRecipe] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setRecipe(null)
    const generatedRecipe = await generateRecipe(spirits, novel);
    setRecipe(generatedRecipe);
    setLoading(false);
  };

  return (
    <Container fluid className='px-0 parent-container d-flex flex-column'>
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
                      placeholder="e.g. gin, rum, tequila"
                    />
                  </Form.Group>
                </Col>
                <Col md="auto">
                  <Form.Group controlId="formNovel">
                    <Form.Control
                      type="text"
                      value={novel}
                      onChange={(e) => setNovel(e.target.value)}
                      placeholder="e.g. Jurassic Park"
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
      <Container className='py-4'>
        <Row className="justify-content-center">
        {loading && (
          <Col md={6}>loading...</Col>
        )}
        {recipe && (
          <Col md={6}>
              <p className="recipe"
                dangerouslySetInnerHTML={{ __html: recipe.trim() }}></p>
          </Col>
        )}
        </Row>
      </Container>
      <Container fluid className='mt-auto'>
        <Row className='justify-content-end'>
          <Col md="auto">
            <p><em>Recipes are generated via OpenAI</em></p>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default CocktailForm;
