import React, { useState } from 'react';
import generateTools from './generateRecipe';
import ParentContainer from './components/ParentContainer';
import HeaderContainer from './components/HeaderContainer';
import RecipeContainer from './components/RecipeContainer';
import FooterContainer from './components/FooterContainer';
import './App.scss';

const CocktailForm = () => {
  const [spirits, setSpirits] = useState(['']);
  const [novel, setNovel] = useState('');
  const [recipe, setRecipe] = useState('');
  const [hunt, setHunt] = useState('');
  const [loading, setLoading] = useState(false);
  const [locations, setLocations] = useState(['']);
  const [activeTab, setActive] = useState('home');

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    const generatedRecipe = await generateTools.generateRecipe(spirits, novel);
    setRecipe(generatedRecipe);
    setLoading(false);
    setActive('recipe')
  };

  const handleSubmitHunt = async (event) => {
    event.preventDefault();
    setLoading(true);
    const generatedRecipe = await generateTools.generateHunt(locations, novel);
    setHunt(generatedRecipe);
    setLoading(false);
    setActive('hunt')
  };

  return (
    <ParentContainer>
      <HeaderContainer 
        spirits={spirits} 
        setSpirits={setSpirits} 
        novel={novel} 
        setNovel={setNovel} 
        handleSubmit={handleSubmit}
        locations={locations}
        setLocations={setLocations}
        handleSubmitHunt={handleSubmitHunt}>
        </HeaderContainer>
      <RecipeContainer loading={loading} recipe={recipe} active={activeTab} hunt={hunt} setKey={setActive}></RecipeContainer>
      <FooterContainer></FooterContainer>
    </ParentContainer>
  );
};

export default CocktailForm;
