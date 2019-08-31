/* Se carga la capa de acceso a datos de esta entidad */
const carroDal = require('../models/carro.Dal.js');

exports.ObtenerCarro = async(Request, Response) => {
    await carroDal.GetByID(Request.BD, Request.params.id)
        .then(function(Carro) {
                Response.status(200).send(Carro);
            },
            function(Error) {                
                Response.status(500).send({ Codigo: -4, Estado: 'Error', Mensaje: 'Ocurrio un error al ejecutar la solicitud.',Excepcion: Error });
            });
};


exports.InsertarCarro = async(Request, Response) => {
    await carroDal.Post(Request.BD, Request.body)
        .then(function(Carro) {
                Response.status(200).send(Carro);
            },
            function(Error) {                
                Response.status(500).send({ Codigo: -4, Estado: 'Error', Mensaje: 'Ocurrio un error al ejecutar la solicitud.',Excepcion: Error });
            });
};

exports.ActualizarCarro = async(Request, Response) => {
    await carroDal.Put(Request.BD, Request.body)
        .then(function(Carro) {
                Response.status(200).send(Carro);
            },
            function(Error) {                
                Response.status(500).send({ Codigo: -4, Estado: 'Error', Mensaje: 'Ocurrio un error al ejecutar la solicitud.',Excepcion: Error });
            });
};


exports.EliminarCarro = async(Request, Response) => {
    await carroDal.Delete(Request.BD, Request.params.id)
        .then(function(Carro) {
                Response.status(200).send(Carro);
            },
            function(Error) {                
                Response.status(500).send({ Codigo: -4, Estado: 'Error', Mensaje: 'Ocurrio un error al ejecutar la solicitud.',Excepcion: Error });
            });
};

