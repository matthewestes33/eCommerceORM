// import important parts of sequelize library
const { Model, DataTypes } = require('sequelize');
// import our database connection from config.js
const sequelize = require('../config/connection');

// Initialize Product model (table) by extending off Sequelize's Model class
class Product extends Model { }

// set up fields and rules for Product model
Product.init(
  {
    // unique ID for each new product
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    // productData from product-seeds.js
    product_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    // productData from product-seeds.js
    price: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      validate: {
        isDecimal: true
      }
    },
    // productData from product-seeds.js
    stock: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 10,
      Validate: {
        isNumeric: true
      }
    },
    // Products belongsTo Category
    // productData from product-seeds.js
    category_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'category',
        key: 'id'
      }
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product',
  }
);

module.exports = Product;
