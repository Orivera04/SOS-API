/* Definiendo controladores del modulo */
const autenticacionController = require('../controllers/autenticacion.Controller');
const averiaController = require('../controllers/averia.Controller');
const carroController = require('../controllers/carro.Controller');
const usuarioController = require('../controllers/usuario.Controller');
const contactoController = require('../controllers/contacto.Controller');

module.exports = function(Router) {

    /* Rutas para el controlador Autenticacion */
    Router.post('/Autenticacion', autenticacionController.VerificarUsuario);
    Router.put('/Autenticacion', autenticacionController.RestablecerCredenciales);
    
    /* Rutas para el controlador Averia */
    Router.get('/Averia/', averiaController.ObtenerAveria);
    Router.get('/Averia/:id', averiaController.ObtenerAveria);
    Router.post('/Averia', averiaController.InsertarAveria);
    Router.put('/Averia', averiaController.ActualizarAveria);
    Router.delete('/Averia', averiaController.EliminarAveria);


    /* Rutas para el controlador Carro */
    Router.get('/Carro/:id', carroController.ObtenerCarro);
    Router.post('/Carro', carroController.InsertarCarro);
    Router.put('/Carro', carroController.ActualizarCarro);
    Router.delete('/Carro/:id', carroController.EliminarCarro);

    /* Rutas para el controlador Usuario */
    Router.get('/Usuario/:id', usuarioController.ObtenerUsuario);
    Router.post('/Usuario', usuarioController.InsertarUsuario);
    Router.put('/Usuario', usuarioController.ActualizarUsuario);
    Router.delete('/Usuario', usuarioController.EliminarUsuario);

    /* Rutas para el controlador contacto */
    Router.post('/Contacto', contactoController.InsertarMensaje);
};