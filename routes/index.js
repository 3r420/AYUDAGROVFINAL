const { Router } = require('express');
var express = require('express');
var router = express.Router();


//constantes del llamado a los controladores
const categoria = require ('../controllers/categoria_controller');
const usuario = require ('../controllers/usuario_controller');



//rutas de categorias
router.get('/listarCategoria',categoria.ListarCategoria);
router.post('/nuevaCategoria')
//rutas de usuario
router.get('/listarUsuario',usuario.ListarUsuario);


/* GET home page. 
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});*/

module.exports = router;
