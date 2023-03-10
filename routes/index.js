const { Router } = require('express');
var express = require('express');
var router = express.Router();


//constantes del llamado a los controladores
const categoria = require ('../controllers/categoria_controller');
const usuario = require ('../controllers/usuario_controller');
const archivo = require ('../controllers/archivo_controller');



//rutas de categorias
router.get('/listarCategoria',categoria.ListarCategoria);//funcionando
router.post('/nuevaCategoria',categoria.CreateCategoria);//funcionando
//rutas de usuario
router.get('/listarUsuario',usuario.ListarUsuario);//funcionando
router.post('/nuevoUsuario',usuario.CreateUsuario);//funcioando
router.put('/editarUsuario',usuario.UpdateUsuario);//revisar
//rutas de archivo
router.get('/listarArchivo',archivo.ListarArchivo)//funcionando
router.post('NuevoArchivo',archivo.CreateArchivo)


/* GET home page. 
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});*/

module.exports = router;
