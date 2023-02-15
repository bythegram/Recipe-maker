import axios from 'axios';

const API_KEY = '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';
const API_ENDPOINT = 'https://api.openai.com/v1/completions';

const generateRecipe = async (spirits, novel) => {
	try {
		
		const response = await axios.post(API_ENDPOINT, {
			prompt: `Invent a new custom cocktail recipe using ${spirits} inspired by ${novel}, be sure to give it a unique name. Please include a paragraph explaining the inspiration.`,
			max_tokens: 2048,
			temperature: 0.5,
			model: "text-davinci-003",
		}, { headers: {
			"Content-Type": "application/json",
			Authorization:
				`Bearer ${API_KEY}`
		} });

		const recipe = response.data.choices[0].text;
		console.log(recipe);
		return recipe;
	} catch (error) {
		console.error(error);
	}
};

export default generateRecipe;
