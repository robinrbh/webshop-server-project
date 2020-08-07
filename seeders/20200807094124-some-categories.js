"use strict"

module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.bulkInsert(
			"categories",
			[
				{
					name: "Phones",
					description: "Nokia, iPoen, spv",
					imageurl: "https://www.ezrider.nl/wp-content/uploads/2018/09/118.jpg",
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: "Mentos potjes",
					description: "Grote gele potje, kleine gele potje, dikke potje",
					imageurl:
						"https://vignette.wikia.nocookie.net/worms/images/b/bc/Holyhandgrenade.png/revision/latest?cb=20140302130533",
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: "Brommers",
					description: "Cita, Gilera, Vespa, Tomos",
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
		await queryInterface.bulkDelete("categories", null, {})
	},
}
