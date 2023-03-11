const { Router } = require('express');
var express = require('express');
var router = express.Router();


//constantes del llamado a los controladores
const categoria = require ('../controllers/categoria_controller');
const usuario = require ('../controllers/usuario_controller');
const archivo = require ('../controllers/archivo_controller');
const pregunta= require ('../controllers/pregunta_controller');
const respuesta = require ('../controllers/respuesta_controller');
const rol = require ('../controllers/rol_controller')




//rutas de categorias
router.get('/listarCategoria', categoria.ListarCategoria); //funcionando
router.post('/nuevaCategoria', categoria.CreateCategoria); //funcionando
router.put('/editarCategoria/:id', categoria.UpdateCategoria); //funcionando
router.get('/verDetalleCategoria/:id', categoria.ViewCategoria); //funcionando
router.delete('/eliminarCategoria/:id', categoria.EliminarCategoria); //funcionando
//rutas de usuario
router.get('/listarUsuario', usuario.ListarUsuario); //funcionando
router.post('/nuevoUsuario', usuario.CreateUsuario); //funcionando
router.put('/editarUsuario/:id', usuario.UpdateUsuario); //funcionando
router.get('/verDetalleUsuario/:id', usuario.ViewUsuario); //funcionando
router.delete('/eliminarUsuario/:id', usuario.EliminarUsuario); //funcionando
//rutas de archivo
router.get('/listarArchivo', archivo.ListarArchivo); //funcionando
router.post('/nuevoArchivo', archivo.CreateArchivo); //funcionando
router.put('/editarArchivo/:id', archivo.UpdateArchivo); //funcionando
router.get('/verDetalleArchivo/:id', archivo.ViewArchivo); //funcionando
router.delete('/eliminarArchivo/:id', archivo.EliminarArchivo); //funcionando
//rutas de pregunta
router.get('/listarPregunta', pregunta.ListarPregunta); //funcionando
router.post('/nuevaPregunta', pregunta.CreatePregunta); //funcioando
router.put('/editarPregunta/:id', pregunta.UpdatePregunta); //funcionando
router.get('/verDetallePregunta/:id', pregunta.ViewPregunta); //funcionando
router.delete('/eliminarPregunta/:id', pregunta.EliminarPregunta); //funcionando
//rutas respuesta
router.get('/listarRespuesta', respuesta.ListarRespuesta); //funcioanado
router.post('/nuevaRespuesta', respuesta.CreateRespuesta); //funcioando
router.put('/editarRespuesta/:id', respuesta.UpdateRespuesta); //funcionando
router.get('/verDetalleRespuesta/:id', respuesta.ViewRespuesta); //funcionando
router.delete('/eliminarRespuesta/:id', respuesta.EliminarRespuesta); //funcionando
//rutas rol
router.get('/LiatrRol',rol.ListarRol)//funcionando
router.post('/NuevoRol',rol.CreateRol)//funcionando
//subcategoria





/* GET home page. 
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});*/

module.exports = router;