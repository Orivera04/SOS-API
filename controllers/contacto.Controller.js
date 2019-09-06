/* Se carga la capa de acceso a datos de esta entidad */
const contactoDal = require('../models/contacto.Dal.js');


exports.InsertarMensaje = async(Request, Response) => {
    await contactoDal.Post(Request.BD, Request.body)
        .then(function(Mensaje) {
               Response.status(200).send({Codigo: 5, Estado : "Exito"});
            },
            function(Error) {                
                Response.status(500).send({ Codigo: -4, Estado: 'Error', Mensaje: 'Ocurrio un error al ejecutar la solicitud.',Excepcion: Error });
            });
};


exports.MandarMensaje = async(Request, Response) => {
    await contactoDal.Put(Request.BD)
        .then(function(Correos) {
               Response.status(200).send({Codigo: 5, Estado : "Exito"});
            },
            function(Error) {                
                Response.status(500).send({ Codigo: -4, Estado: 'Error', Mensaje: 'Ocurrio un error al ejecutar la solicitud.',Excepcion: Error });
            });
};






