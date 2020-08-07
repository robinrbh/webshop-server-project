"use strict"

module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.bulkInsert(
			"order",
			[
				{
					customerId: 1,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					customerId :2,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					customerId :1,
					createdAt: new Date(),
					updatedAt: new Date(),
				}
			],
			{}
		)
	},

	down: async (queryInterface, Sequelize) => {
		/**
		 * Add commands to revert seed here.
		 *
		 * Example:
		 * await queryInterface.bulkDelete('People', null, {});
		 */
	},
}
