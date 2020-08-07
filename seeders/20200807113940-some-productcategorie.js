"use strict"

module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.bulkInsert("productCategories", [
			{
				productId: 1,
        categoryId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
			},
		])
	},

	down: async (queryInterface, Sequelize) => {
		await queryInterface.bulkDelete("productCategories", null, {})
	},
}
