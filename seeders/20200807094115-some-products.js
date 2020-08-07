"use strict"

module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.bulkInsert(
			"products",
			[
				{
					name: "iPhone 12",
					price: 599.99,
					description: "iPhone 12",
					imageurl: "a",
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: "iPhone X",
					price: 499.99,
					description: "iPhone X",
					imageurl: "https://tweakers.net/ext/i/2002468080.jpeg",
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: "Dell XPS 15 inch",
					price: 1299.99,
					description: "Dell XPS laptop",
					imageurl:
						"https://i.dell.com/is/image/DellContent//content/dam/global-site-design/product_images/dell_client_products/notebooks/xps_notebooks/xps_15_7590/pdp/laptops-xps-15-7590-pdp-gallery504x350.jpg?fmt=jpg&wid=570&hei=400",
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: "Unholy hyper jet",
					description: "Left-rear engine of the super speeder",
					price: 100000,
					imageurl: "https://www.ezrider.nl/wp-content/uploads/2018/09/118.jpg",
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: "Heilige handgranaat",
					description: "Grote gele granaat dat iets schreeuwt",
					price: 50,
					imageurl:
						"https://vignette.wikia.nocookie.net/worms/images/b/bc/Holyhandgrenade.png/revision/latest?cb=20140302130533",
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: "Nokia 3310",
					description: "Baksteen",
					price: 100,
					imageurl:
						"https://i.kym-cdn.com/photos/images/newsfeed/001/705/738/64d.jpg",
					createdAt: new Date(),
					updatedAt: new Date(),
				},
			],
			{}
		)
	},

	down: async (queryInterface, Sequelize) => {
		await queryInterface.bulkDelete("products", null, {})
	},
}
