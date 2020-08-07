"use strict"
const { Model } = require("sequelize")
module.exports = (sequelize, DataTypes) => {
	class product extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			// define association here
			//product.belongsTo(models.todoList);
      product.belongsToMany(models.order, {
        through: "orderProducts", 
        foreignKey: "productId", 
			}),
			product.belongsToMany(models.category, {
        through: "productCategory", 
        foreignKey: "productId", 
			})
		}
	}
	product.init(
		{
      id: { type: DataTypes.INTEGER, allowNull: false, unique: true },
			name: { type: DataTypes.STRING, allowNull: false, unique: true },
			description: { type: DataTypes.TEXT, allowNull: false },
			price: { type: DataTypes.FLOAT, allowNull: false },
			imageurl: { type: DataTypes.TEXT, allowNull: false, unique: true },
		},
		{
			sequelize,
			modelName: "product",
		}
	)
	return product
}
