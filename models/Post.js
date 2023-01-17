//Importar Model y DataTypes de sequelize
const { Model, DataTypes } = require('sequelize');
//Importar conexión de sequelize
const sequelize = require('../config/connection');

//Modelo Post extiende el Model de sequelize
class Post extends Model {}

//Definir columnas de la tabla Post 
Post.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    content: {
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
    modelName: 'post',
  }
);

module.exports = Post;