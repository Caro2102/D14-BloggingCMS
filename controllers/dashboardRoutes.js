const router = require('express').Router();
const { Post, Comment,User } = require('../models');
const withAuth = require("../utils/auth");

router.get('/',withAuth, async (req, res) => {
    try {
        const userPost=await Post.findAll({
          where: {
            user_id:req.session.user.id
          }, 
        });
        if(!userPost){
          res.status(404).json({message: "No clients found in database"});
          return;
      }
     const posts = userPost.map((post) =>
      post.get({ plain: true })
    );
    res.render('dashboard', {
      posts,
      loggedIn: req.session.loggedIn

    });
    } catch (err) {
      res.status(500).json(err);
    }
});

router.get('/editPost/:id',withAuth, async (req, res) => {
    try {
        const postData = await Post.findOne({ //Traer un post de la base de datos
            where:{
                id: req.params.id, //Utilizar el id para traer la orden
            },
        });
        if (!postData){
            res.status(404).json({message : "No order was found in database with that id"});
            return;
        }
       const posts = postData.get({ plain: true }); 
        res.render('editPost', { 
            posts,
            loggedIn: req.session.loggedIn
        });
    } catch (error) {
        res.status(500).json(error);
    }
});
//Ruta para hacer render del view addPost
router.get('/addPost', withAuth, async (req, res) => {
    try{
        res.render('addPost', { 
            loggedIn: req.session.loggedIn,
        });
    }
    catch (error){
        res.status(500).json(error);
    }
});

router.post('/',withAuth, async (req, res) => {  
    try {
      //Crear un Post en la base de datos utilizando la información del body
        const newPost = await Post.create({ 
            title : req.body.title,
            content: req.body.content,
            user_id : req.session.user.id,
            published_on : req.body.published_on,
        });
        console.log(req.body);
        res.status(200).json(newPost);
    } catch (error) {
        console.log(req.body);
        res.status(500).json(error);
    }
});
router.put('/:id', withAuth, async (req, res) => {
    try {
        const postData = await Post.update({ //Update post in database with data
          title : req.body.title,
          content : req.body.content,
        },
        {
          where: {
            id : req.params.id, //Use the id to update a single post
          }
        }
        )
        res.status(200).json(postData); //Respond with status 200 and the data
      } catch (err) { //Catch any error
        res.status(500).json(err); //Respond with status 500 if there is a problem/error
      }
    });
  
router.delete('/:id',withAuth, async (req, res) => {
      try {
        //Eliminar el post de la base de datos
          const deletePost = await Post.destroy({ 
              where: {
                  id: req.params.id, 
              },
          });
          if(!deletePost){
              res.status(404).json({message: "No post was found with that rfc in database"});
              return;
          }
          res.status(200).json(deletePost);
      } catch (error) {
          res.status(500).json(error);
      }
  
});

  module.exports=router;