/* Definiendo controladores del modulo */
const autenticacionController = require('../controllers/autenticacion.Controller');

module.exports = function(Router) {

    /* Rutas para el controlador Autenticacion */

    Router.post('/Autenticacion', autenticacionController.VerificarUsuario);
    
};