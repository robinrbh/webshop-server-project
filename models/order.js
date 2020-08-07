"use strict"
const { Model } = require("sequelize")
module.exports = (sequelize, DataTypes) => {
	class order extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			// define association here
		}
	}
	order.init(
		{
			productName: { type: DataTypes.STRING, allowNull: false, unique: true },
			amount: { type: DataTypes.STRING, allowNull: false },
			price: { type: DataTypes.FLOAT, allowNull: false },
			total: { type: DataTypes.FLOAT, allowNull: false },
		},
		{
			sequelize,
			modelName: "order",
		}
	)
	return order
}
