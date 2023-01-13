const { Post } = require('../models');

const postdata = [
  {
    title: 'Why MVC is so important',
    content: 'MVC allows developers to maintain a true separation of concerns, devising their code between the Model layer for data, the View layer for design, and the Controller layer for application logic.',
    user_id: 1,
    published_on: 'Febraury 05, 2022 19:00:00',
  },
  {
    title: 'Object-Relational Mapping',
    content: 'I have really loved learning about ORMa. Its really simplified the way I create queries!',
    user_id: 2,
    published_on: 'January 09, 2023 17:00:00',
  },
  {
    title: 'Authentication vs. Authorization',
    content: 'There is a difference between authentication and authorization. Authentication means confirming your identity whereas autheorization means being allowed acces to the system.',
    user_id: 3,
    published_on: 'January 09, 2023 14:00:00',
  },
];

const seedPost = () => Post.bulkCreate(postdata);

module.exports = seedPost;