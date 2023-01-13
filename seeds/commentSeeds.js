const { Comment } = require('../models');

const commentdata = [
  {
    commentText: 'Thank you very much for the explanation., now I understand',
    user_id: 1,
    post_id: 3,
    published_on: 'January 09, 2023 15:00:00',
  },
  {
    commentText: 'I just learned about this on my class!',
    user_id: 2,
    post_id: 2,
    published_on: 'January 10, 2023 12:00:00',
  },
  {
    commentText: 'I owe you one, thanks!',
    user_id: 2,
    post_id: 1,
    published_on: 'Febraury 13, 2022 18:00:00',
  },
  {
    commentText: 'Thanks for making it clear',
    user_id: 3,
    post_id: 3,
    published_on: 'January 11, 2023 16:00:00',
  },
  
  
];

const seedComment = () => Comment.bulkCreate(commentdata);
module.exports = seedComment;