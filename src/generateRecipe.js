import axios from 'axios';

const API_ENDPOINT = 'https://bythegram.ca/wp-json/atom-api/v1/atom-endpoint';

const generateRecipe = async (spirits, novel) => {
	try {
		let prompt = `please create a cocktail as if you were the mixologist at The Connaught Bar in London, be sure to include: ${spirits.join(',')}`;
		prompt = novel ? prompt + `. Inspired by ${novel}` : prompt;
		prompt = prompt + `. Be sure to give it a unique name. Please include a paragraph explaining the inspiration. Provide the output in HTML format. Do not include the bar's name.`
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

const generateHunt = async (locations, novel) => {
	try {
		let prompt = `Create a scavenger hunt, '`
		prompt = novel ? prompt + `. Inspired by ${novel}.` : prompt + '. ';
		prompt = prompt + `Using the following locations: ${locations.join(", ")}.`;
		prompt = prompt + ` There should be a riddle/clue for each location in the following format: "Riddle. (location name)"`;
		prompt = prompt + ` Here is an example of the riddle a location, in this case the location is the microwave: "I’ve got buttons and numbers, and can give things a zap, I’m here to warm, and heat up your snacks. (Microwave)".`;
		prompt = prompt + ` Give the scavenger hunt a unique name. Provide the output in HTML format.`
		const response = await axios.post(API_ENDPOINT, {
			prompt,
			max_tokens: 2048,
			temperature: 0.5,
			model: "text-davinci-003",
		}, {
			headers: {
				"Content-Type": "application/json",
			}
		});

		const recipe = response.data.choices[0].text;
		return recipe;
	} catch (error) {
		console.error(error);
	}
};

const generateTools = {
	generateRecipe,
	generateHunt
}

export default generateTools;
