"use strict"

module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.bulkInsert(
			"customers",
			[
				{
					firstName: "Tom",
					lastName: "Vos",
					email: "tom@tom.nl",
					phone: 1234567,
					password: "tom",
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					firstName: "Weilong",
					lastName: "Lin",
					email: "weilong@weilong.nl",
					phone: 12345678,
					password: "weilong",
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					firstName: "Robin",
					lastName: "Hartog",
					email: "robin@robin.nl",
					phone: 12345679,
					password: "robin",
					createdAt: new Date(),
					updatedAt: new Date(),
				},
			],
			{}
		)
	},

	down: async (queryInterface, Sequelize) => {
		return await queryInterface.bulkDelete("customers", null, {})
	},
}
