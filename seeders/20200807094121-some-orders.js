"use strict"

module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.bulkInsert(
			"orders",
			[
				{
					customerId: 1,
					productId: 1,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					customerId: 2,
					productId: 1,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					customerId: 3,
					productId: 1,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
			],
			{}
		)
	},

	down: async (queryInterface, Sequelize) => {
		await queryInterface.bulkDelete("orders", null, {})
	},
}
