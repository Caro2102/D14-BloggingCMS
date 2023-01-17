//Importar la conexión de sequelize
const sequelize = require('../config/connection');
//Importar las funciones para crear seeds en cada una de las tablas
const seedComment = require('./commentSeeds');
const seedPost = require('./postSeeds');
const seedUser = require('./userSeeds');

//Función para llenar todas las tablas
const seedAll = async () => {
  await sequelize.sync({ force: true });//Sincronizar modelos con la base de datos

  await seedUser(); //Llenar tabla de users
  await seedPost();//Llenar tabla de Post
  await seedComment();//Llenar tabla de Comment

  process.exit(0);
};

seedAll();//Llamar función para llenar todas las tablas
