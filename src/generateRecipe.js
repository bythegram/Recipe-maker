import axios from 'axios';

const API_ENDPOINT = 'https://bythegram.ca/wp-json/atom-api/v1/atom-endpoint';

const generateRecipe = async (spirits, novel) => {
	try {
		let prompt = `Invent a new custom cocktail recipe using ${spirits}`;
		prompt = novel ? prompt + `, inspired by ${novel}` : prompt;
		prompt = prompt + `. Be sure to give it a unique name. Please include a paragraph explaining the inspiration.`
		const response = await axios.post(API_ENDPOINT, {
			prompt,
			max_tokens: 2048,
			temperature: 0.5,
			model: "text-davinci-003",
		}, { headers: {
			"Content-Type": "application/json",
		} });

		const recipe = response.data.choices[0].text;
		return recipe;
	} catch (error) {
		console.error(error);
	}
};

export default generateRecipe;
