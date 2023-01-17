//Importar router de express
const router = require('express').Router();
//Importar el modelo Post
const { Post} = require('../models');
//Importar la función para validar la autorización
const withAuth = require("../utils/auth");

//Ruta para traer todos los post del usuario
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
//Ruta para un editar un post utilizando el parametro id 
router.get('/editPost/:id',withAuth, async (req, res) => {
    try {
        const postData = await Post.findOne({ 
            where:{
                id: req.params.id, 
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

//Ruta para crear un Post en la base de datos utilizando la información del body
router.post('/',withAuth, async (req, res) => {  
    try {
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
//Ruta para modificar un post usando el parametro de id
router.put('/:id', withAuth, async (req, res) => {
    try {
        const postData = await Post.update({ 
          title : req.body.title,
          content : req.body.content,
        },
        {
          where: {
            id : req.params.id, 
          }
        }
        )
        res.status(200).json(postData); 
      } catch (err) { 
        res.status(500).json(err); 
      }
    });
//Ruta para eliminar un post usando el parametro de id
router.delete('/:id',withAuth, async (req, res) => {
      try {
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