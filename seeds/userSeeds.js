//Importar modelo de User
const { User } = require('../models');

//Definir datos a llenar en la tabla user
const userdata = [
  {
    name: 'Xandromus',
    password: 'admin123',
  },
  {
    name: 'Lemantino',
    password: 'admin123',
  },
  {
    name: 'alxmcr',
    password: 'admin123',
  },
  
  
  
];

const seedUser = () => User.bulkCreate(userdata,{//Función para crear todas las entradas en la base de datos 
  individualHooks: true,//Incluir hooks para hacer hash de la contraseña
  returning: true,
});

module.exports = seedUser;//Exportar función para crear seeds en la tabla de user
