const { Model, DataTypes, Sequelize } = require('sequelize');
const sequelize = require('../config/connection');

class Post extends Model {}

// create fields/columns for Post model
Post.init(
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false
      },
      contents: {
        type: DataTypes.STRING,
        allowNull: false
      },
      created_at: {
        type: DataTypes.DATE,
        allowNull: false,
        field: 'created_at',
        defaultValue: Sequelize.NOW
      },
      user_id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'user',
          key: 'id'
        }
      }
    },
    {
      sequelize,
      timestamps: true,
      createdAt: true,
      updatedAt: false,
      freezeTableName: true,
      underscored: true,
      modelName: 'post'
    }
  );
  
  module.exports = Post;