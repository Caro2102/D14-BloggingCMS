//Importar Model y DataTypes de sequelize
const { Model, DataTypes } = require('sequelize');
//Importar conexión de sequelize
const sequelize = require('../config/connection');

//Modelo Comment extiende el Model de sequelize
class Comment extends Model {}

//Definir columnas de la tabla Comment 
Comment.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    commentText: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'user',
        key: 'id'
      }
    },
    post_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'post',
        key: 'id'
      }
    }, 
    published_on: {
      type: DataTypes.DATE,
      allowNull: false,
    }
  },
  //Definir opciones
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'comment',
  }
);

module.exports = Comment;