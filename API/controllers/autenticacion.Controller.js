const loginDal = require('../models/autenticacion.Dal');

exports.VerificarUsuario = async(Request, Response) => {

    await loginDal.Login(Request.BD, Request.body.usuario,Request.body.password )
        .then(function(Login) {
                if (Login[0].id_rol == null) {                         
                    Response.status(200).send({Codigo: 5, Estado: 'Exito', Existe: false, Rol: []});
                } 
                else {
                    Response.status(200).send({Codigo: 5, Estado: 'Exito', Existe: true,Rol :Login[0].id_rol});                                    
                }
            },
            function(Excepcion) {
                Request.Log.ImprimirLogError("Ocurrio un error al hacer un Post al controlador Autenticacion", Excepcion, JSON.stringify(Request.body));
                Response.status(500).send({ Codigo: -4, Estado: 'Error', Mensaje: 'Ocurrio un error al ejecutar la solicitud.' });
            });
};