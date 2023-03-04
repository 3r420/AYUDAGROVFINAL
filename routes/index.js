const { Router } = require('express');
var express = require('express');
var router = express.Router();


//constantes del llamado a los controladores
const categoria = require ('../controllers/categoria_controller');



//rutas
//get para traer
router.get('/listarCategoria',categoria.ListarCategoria);
//post para enviar
router.post('/nuevaCategoria',categoria.CreateCategoria);


/* GET home page. 
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});*/

module.exports = router;
