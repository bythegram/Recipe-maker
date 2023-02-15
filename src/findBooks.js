
const AmazonBookSearch = async (title) => {
	try {
		const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${title}&key=AIzaSyBnwv_ELwXFbE3uhxEPR9xfZ0ol0fWI2oY`);
		const data = await response.json();
		return data.items;
	} catch (error) {
		console.log(error)
	}
};

export default AmazonBookSearch;
