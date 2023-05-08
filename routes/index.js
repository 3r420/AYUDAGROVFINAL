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
const resspuesta_archivo = require('../controllers/respuesta_archivo_controller');
const AuthController = require('../controllers/AuthController');

//user
router.post('/nuevoUser',AuthController.registro);
router.post('/login',AuthController.login);
router.post('/login2',AuthController.loginrol2);
router.post('/login3',AuthController.loginrol3);

router.post('/recuperar',AuthController.rescuperar);


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
router.get('/ListarPreguntaNombreUsuario',pregunta.ListarPreguntaNombreUsuario);
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
router.put('/editarSugerencia_archivo/:id', sugerencia_archivo.Updatesugerencia_archivo);
router.get('/verDetalleSugerencia_archivo/:id', sugerencia_archivo.Viewsugerencia_archivo); 
router.delete('/eliminarSugerenci_archivo/:id', sugerencia_archivo.Eliminarsugerencia_archivo); 
//rutas pregunta_archivo
router.get('/listarPregunta_archivo',pregunta_archivo.Listarpregunta_archivo); //funcionando
router.post('/nuevaPregunta_archivo',pregunta_archivo.Createpregunta_archivo);//funcionando
router.put('/editarPregunta_archivo/:id', pregunta_archivo.Updatepregunta_archivo); 
router.get('/verDetallePregunts_archivo/:id', pregunta_archivo.Viewpregunta_archivo);
router.delete('/eliminarPregunta_archivo/:id', pregunta_archivo.Eliminarpregunta_archivo); 
//rutas respuesta_archivo
router.get('/listarRespuesta_archivo',resspuesta_archivo.Listarrespuesta_archivo); //funcionando
router.post('/nuevaRespuesta_archivo',resspuesta_archivo.Createrespuesta_archivo);//funcionando
router.put('/editarRespuesta_archivo/:id', resspuesta_archivo.Updaterespuesta_archivo); //funcionando
router.get('/verDetalleRespuesta_archivo/:id', resspuesta_archivo.Viewrespuesta_archivo); //funcionando
router.delete('/eliminarRespuesta_archivoa/:id', resspuesta_archivo.Eliminarrespuesta_archivo); //funcionando



//rutas relacionadas entre tablas
//rutas relacionadas   respuesta
router.get('/resxUser/:id',respuesta.RespuestaxUsuario);
router.get('/listarRespuestaPorPregunta',respuesta.listarRespuestaXpregunta);//👍
router.get('/ListarRespuestasPorPreguntaId/:id', respuesta.ListarRespuestasPorPreguntaId); //👍
router.get('/ListarRespuestasPorUsuario/:id', respuesta.listarRespuestaXusuario); //👍


//rutas relacionadas   pregunta
router.get('/listarPreguntaNombreUsuario',pregunta.ListarPreguntaNombreUsuario)
router.get('/listarPreguntaXusuario',pregunta.ListarPreguntaNombreUsuario);//👍👍
router.get('/listarPreguntaPorSubcategoria',pregunta.ListarPreguntaSubcategoria)//👍
router.get('/ListarPreguntaxId/:id',pregunta.ListarPreguntaNombreUsuariosId)
//rutas relacionadas   valorarR
router.get('/ListarvaloracionXusuario', valorar_respuesta.ListarValorarRXusuario); //👍
router.get('/ListarvaloracionXrespuesta', valorar_respuesta.ListarValorarRXrespuesta); //👍
//rutas relacionadas   respuestaArchivo
router.get('/ListarRespuestaArchivoXrespuesta', resspuesta_archivo.Listarrespuesta_archivoXrespuesta); //👍
router.get('/ListarRespuestaArchivoXarchivo', resspuesta_archivo.Listarrespuesta_archivoXarchivo); //👍
//rutas relacionadas   subcategoria
router.get('/ListarSubcategoriaPorCategoria', subcategoria.ListarSubcategoriaxCategoria); //👍
//rutas relacionadas de sugerencia
router.get('/listarSugerenciaXSubcategoria',sugerencia.ListarSugerenciaPorSubcategoria);//👍
//rutas relacionadas   preguntaArchivo
router.get('/ListarPreguntaArchivoXpregunta', pregunta_archivo.ListarpreguntaArchivoPorPregunta); //👍
router.get('/ListarRespuestaArchivoXarchivo', pregunta_archivo.ListarpreguntaArchivoPorArchivo); //👍
//rutas relacionadas de usuario
router.get('/listarUserPorRol',usuario.ListarUsuarioPorRol)
//rutas relacionadas de sugerencia_archivo
router.get('/listaSugerenciaArchivoPorSugerencia',sugerencia_archivo.Listarsugerencia_archivoXsugerencia)
router.get('/listaSugerenciaArchivoPorArchivo',sugerencia_archivo.Listarsugerencia_archivoXarchivo)


/* GET home page. 
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});*/

module.exports = router;