"use strict"
const { Model } = require("sequelize")
module.exports = (sequelize, DataTypes) => {
	class orderProduct extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			orderProduct.belongsTo(models.product);
      orderProduct.belongsTo(models.todoItem);
		}
	}
	orderProduct.init(
		{
			productId: { type: DataTypes.INTEGER, allowNull: false},
			orderId: { type: DataTypes.INTEGER, allowNull: false},
			// productName: { type: DataTypes.STRING, allowNull: false, unique: true },
			// amount: { type: DataTypes.STRING, allowNull: false },
			// price: { type: DataTypes.FLOAT, allowNull: false },
			// total: { type: DataTypes.FLOAT, allowNull: false },
		},
		{
			sequelize,
			modelName: "orderProduct",
		}
	)
	return orderProduct
}
