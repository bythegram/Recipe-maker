import React, { useState } from 'react';
import generateRecipe from './generateRecipe';
import ParentContainer from './components/ParentContainer';
import HeaderContainer from './components/HeaderContainer';
import RecipeContainer from './components/RecipeContainer';
import FooterContainer from './components/FooterContainer';
import './App.scss';

const API_KEY = process.env.REACT_APP_OPENAI_KEY;

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
    <ParentContainer>
      <p>{API_KEY}</p>
      <HeaderContainer spirits={spirits} setSpirits={setSpirits} novel={novel} setNovel={setNovel} handleSubmit={handleSubmit}></HeaderContainer>
      <RecipeContainer loading={loading} recipe={recipe}></RecipeContainer>
      <FooterContainer></FooterContainer>
    </ParentContainer>
  );
};

export default CocktailForm;
