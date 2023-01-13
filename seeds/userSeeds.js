const { User } = require('../models');

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

const seedUser = () => User.bulkCreate(userdata,{
  individualHooks: true,
  returning: true,
});

module.exports = seedUser;
