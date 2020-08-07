"use strict"
module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.createTable("orders", {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER,
			},
			productName: {
				type: Sequelize.STRING,
				allowNull: false,
				unique: true,
			},
			amount: { type: Sequelize.STRING, allowNull: false },
			price: { type: Sequelize.FLOAT, allowNull: false },
			total: { type: Sequelize.FLOAT, allowNull: false },
			createdAt: {
				allowNull: false,
				type: Sequelize.DATE,
			},
			updatedAt: {
				allowNull: false,
				type: Sequelize.DATE,
			},
		})
	},
	down: async (queryInterface, Sequelize) => {
		await queryInterface.dropTable("orders")
	},
}
