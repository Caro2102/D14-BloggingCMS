//Importar Model y DataTypes de sequelize
const { Model, DataTypes } = require('sequelize');
//Importar bcrypt
const bcrypt = require('bcrypt');
//Importar conexión de sequelize
const sequelize = require('../config/connection');

//Modelo User extiende el Model de sequelize
class User extends Model {
  //Método para verificar la contraseña del usuario
  checkPassword(loginPw) {
    return bcrypt.compareSync(loginPw, this.password);
  }
}
//Definir columnas de la tabla user 
User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [8],
      },
    },
  },
  //Definir opciones y hooks
  {
    hooks: {
      beforeCreate: async (newUserData) => {
        newUserData.password = await bcrypt.hash(newUserData.password, 10);
        return newUserData;
      },
    },
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'user',
  }
);

module.exports = User;
