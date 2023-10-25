import axios from "axios";

async function getData(id) {
	try {
		const [user , post] = await Promise.all([
			await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`),
			await axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
		]);

		const data = { ...user.data, post: post.data };
		console.log(data);
	} catch (error) {
		console.log(error);
	}
}

export { getData };