const { Router } = require('express');
var express = require('express');
var router = express.Router();


//constantes del llamado a los controladores
const categoria = require ('../controllers/categoria_controller');
const usuario = require ('../controllers/usuario_controller');
const archivo = require ('../controllers/archivo_controller');
const pregunta= require ('../controllers/pregunta_controller');
const respuesta = require ('../controllers/respuesta_controller');



//rutas de categorias
router.get('/listarCategoria',categoria.ListarCategoria);//funcionando
router.post('/nuevaCategoria',categoria.CreateCategoria);//funcionando
//rutas de usuario
router.get('/listarUsuario',usuario.ListarUsuario);//funcionando
router.post('/nuevoUsuario',usuario.CreateUsuario);//funcionando
router.put('/editarUsuario/:id',usuario.UpdateUsuario);
router.get('/verDetalleUsuario/:id',usuario.ViewUsuario);
router.delete('/eliminarUsuario/:id',usuario.EliminarUsuario);
//rutas de archivo
router.get('/listarArchivo',archivo.ListarArchivo);//funcionando
router.post('/NuevoArchivo',archivo.CreateArchivo);//funcionando
//rutas de pregunta
router.get('/listarPregunta',pregunta.ListarPregunta);//funcionando
router.post('/NuevaPregunta',pregunta.CreatePregunta);//funcioando
//rutas respuesta
router.get('/listarRespuesta',respuesta.ListarRespuesta);//funcioanado
router.post('/NuevaRespuesta',respuesta.CreateRespuesta);//funcioando


/* GET home page. 
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});*/

module.exports = router;
