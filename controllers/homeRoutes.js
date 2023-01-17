const router = require('express').Router();
const { Post, Comment,User } = require('../models');
const withAuth = require("../utils/auth");


//Ruta de home/página con todos los posts
router.get('/', async (req, res) => {
  try {
    const postData = await Post.findAll({
      include: [
        {
          model: User,
        },
      ],
    });
    if (!postData){
      res.status(404).json({message : "No posts found in database"});
      return;
    }
    const posts = postData.map((post) =>
      post.get({ plain: true })
    );
    res.render('homepage', {
      posts,
      loggedIn: req.session.loggedIn

    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

//Ruta para obtener un post con todos sus comentarios
router.get('/post/:id', async (req, res) => {
  try {
      const orderData = await Post.findOne({ 
          where:{
              id: req.params.id, 
          },
          include:[
              {
                  model: User, 
              },
              {
                  model: Comment,
                  include:[
                    {
                      model: User, 
                  },
                  ] 
              },
          ]
      });
      const posts = orderData.get({ plain: true })
      res.render('viewPost', { 
          posts,
          loggedIn: req.session.loggedIn
      });
  } catch (error) {
      res.status(500).json(error);
  }
});


//Ruta para crear un nuevo comentario 
router.post('/',withAuth, async (req, res) => {  
    try {
      const newComment = await Comment.create({ 
          
            commentText : req.body.commentText,
            user_id: req.session.user.id,
            post_id : req.body.post_id,
            published_on : req.body.published_on,
        });
        console.log(req.body);
        res.status(200).json(newComment);
    } catch (error) {
        res.status(500).json(error);
        console.log(req.body);

    }
});

router.get('/login', (req, res) => {
  if (req.session.loggedIn) { 
    res.redirect('/'); 
    return;
  }
  res.render('login');
});



module.exports=router;