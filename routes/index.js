const { Router } = require('express');
var express = require('express');
var router = express.Router();


//constantes del llamado a los controladores
const categoria = require ('../controllers/categoria_controller');
const usuario = require ('../controllers/usuario_controller');
const archivo = require ('../controllers/archivo_controller');
const pregunta= require ('../controllers/pregunta_controller');
const respuesta = require ('../controllers/respuesta_controller');
const rol = require ('../controllers/rol_controller');
const sugerencia = require ('../controllers/sugerencia_controller');
const sugerencia_archivo = require ('../controllers/sugerencia_archivo_contrllers');
const subcategoria = require('../controllers/subcategoria_controller');
const valorar_respuesta = require('../controllers/valorar_respuesta_controller');
const pregunta_archivo = require('../controllers/pregunta_archivo_controller');





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
router.post('/nuevaPregunta', pregunta.CreatePregunta); //funcionando
router.put('/editarPregunta/:id', pregunta.UpdatePregunta); //funcionando
router.get('/verDetallePregunta/:id', pregunta.ViewPregunta); //funcionando
router.delete('/eliminarPregunta/:id', pregunta.EliminarPregunta); //funcionando
//rutas respuesta
router.get('/listarRespuesta', respuesta.ListarRespuesta); //funcionanado
router.post('/nuevaRespuesta', respuesta.CreateRespuesta); //funcionando
router.put('/editarRespuesta/:id', respuesta.UpdateRespuesta); //funcionando
router.get('/verDetalleRespuesta/:id', respuesta.ViewRespuesta); //funcionando
router.delete('/eliminarRespuesta/:id', respuesta.EliminarRespuesta); //funcionando
//rutas rol
router.get('/listarRol',rol.ListarRol); //funcionando
router.post('/nuevoRol',rol.CreateRol);//funcionando
router.put('/editarRol/:id', rol.UpdateRol); //funcionando
router.get('/verDetalleRol/:id', rol.ViewRol); //funcionando
router.delete('/eliminarRol/:id', rol.EliminarRol); //funcionando
//rutas sugerencia
router.get('/listarSugerencia',sugerencia.ListarSugerencia); //funcionando
router.post('/nuevaSugerencia',sugerencia.CreateSugerencia);//funcionando
router.put('/editarSugerencia/:id', sugerencia.UpdateSugerencia); //funcionando
router.get('/verDetalleSugerencia/:id', sugerencia.ViewSugerencia); //funcionando
router.delete('/eliminarSugerencia/:id', sugerencia.EliminarSugerencia); //funcionando
//subcategoria
router.get('/ListarSubcategoria',subcategoria.ListarSubcategoria);
router.post('/nuevaSubcategoria',subcategoria.CreateSubcategoria);//funcionando
router.put('/editarSubcategoria/:id', subcategoria.UpdateSubcategoria); //funcionando
router.get('/verDetalleSubcategoria/:id', subcategoria.ViewSubcategoria); //funcionando
router.delete('/eliminarSubcategoria/:id', subcategoria.EliminarSubcategoria); //funcionando
//rutas valorar_respuesta
router.get('/listarValorarR',valorar_respuesta.ListarValorarR); //funcionando
router.post('/nuevoValorarR',valorar_respuesta.CreateValorarR);//funcionando
router.put('/editarValorarR/:id', valorar_respuesta.UpdateValorarR); //funcionando
router.get('/verDetalleValorarR/:id', valorar_respuesta.ViewValorarR); //funcionando
router.delete('/eliminarValorarR/:id', valorar_respuesta.EliminarValorarR); //funcionando
//rutas sugerencia_archivo
router.get('/listarSugerencia_archivo',sugerencia_archivo.Listarsugerencia_archivo); //funcionando
router.post('/nuevaSugerencia_archivo',sugerencia_archivo.Createsugerencia_archivo);//funcionando
router.put('/editarSugerencia_archivo/:id', sugerencia_archivo.Updatesugerencia_archivo); //funcionando
router.get('/verDetalleSugerencia_archivo/:id', sugerencia_archivo.Viewsugerencia_archivo); //funcionando
router.delete('/eliminarSugerenci_archivoa/:id', sugerencia_archivo.Eliminarsugerencia_archivo); //funcionando
//rutas pregunta_archivo
router.get('/listarPregunta_archivo',pregunta_archivo.Listarpregunta_archivo); //funcionando
router.post('/nuevaPregunta_archivo',pregunta_archivo.Createpregunta_archivo);//funcionando
router.put('/editarPregunta_archivo/:id', pregunta_archivo.Updatepregunta_archivo); //funcionando
router.get('/verDetallePregunts_archivo/:id', pregunta_archivo.Viewpregunta_archivo); //funcionando
router.delete('/eliminarPregunta_archivoa/:id', pregunta_archivo.Eliminarpregunta_archivo); //funcionando




/* GET home page. 
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});*/

module.exports = router;