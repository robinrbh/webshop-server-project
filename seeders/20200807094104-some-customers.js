"use strict"

module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.bulkInsert(
			"customers",
			[
				{
					name: "Tom Vos",
					email: "tom@tom.nl",
					phone: 1234567,
					password: "tom",
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: "Weilong Lin",
					email: "weilong@weilong.nl",
					phone: 1234567,
					password: "weilong",
					createdAt: new Date(),
					updatedAt: new Date(),
        },
        {
					name: "Robin Hartog",
					email: "robin@robin.nl",
					phone: 1234567,
					password: "robin",
					createdAt: new Date(),
					updatedAt: new Date(),
				},
			],
			{}
		)
	},

	down: async (queryInterface, Sequelize) => {
		return await queryInterface.bulkDelete("customers", null, {});
	},
}
