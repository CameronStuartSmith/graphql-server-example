const getProjection = require('./getProjection');

module.exports = {

	/*
		stupid to have a promise here but its just to show that you can return an unresolved promise
		and graphql will wait for it to resolve 
	*/
	getProductById: (id, info) => {
		const projections = getProjection(info);
		console.log(projections);

		/*
			The above code is useless here but helpful with mongodb
			It will grab just the properties that the request is looking for
			and then format that for the projections arg of find in mongoose
			so:
				product.find({ id: id }, projections);
			this makes it so mongoose will only grab that stuff from your db
			and you aren't overfetching properties
		*/

		const product = productList.find((ob) => ob.id === id);

		return new Promise((resolve) => {
			setInterval(() => {
				resolve(product);
			}, 2000);
		});
	},

	getProducts: (info) => {
		const projections = getProjection(info);
		console.log(projections);
		return productList;
	},

	createProduct: ({ name, price }) => {
		productList.push({
			id: `${productList.length}`,
			name,
			price,
		});
		return productList[productList.length-1];
	}

}

const productList = [
	{ id: '0', name: 'Toothbrush', price: 10.57 },
	{ id: '1', name: 'Soda', price: 1.87 },
	{ id: '2', name: 'Watch', price: 49.97 },
];