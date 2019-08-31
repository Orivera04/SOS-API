/* Se carga la capa de acceso a datos de esta entidad */
const averiaDal = require('../models/Averia.Dal.js');

exports.ObtenerListaAverias = async(Request, Response) => {
    await averiaDal.GetAll(Request.BD, Request.params.id)
        .then(function(Averia) {
                Response.status(200).send(Averia);
            },
            function(Error) {                
                Response.status(500).send({ Codigo: -4, Estado: 'Error', Mensaje: 'Ocurrio un error al ejecutar la solicitud.',Excepcion: Error });
            });
};

exports.ObtenerAveria = async(Request, Response) => {
    await averiaDal.GetByID(Request.BD, Request.params.id)
        .then(function(Averia) {
                Response.status(200).send(Averia);
            },
            function(Error) {                
                Response.status(500).send({ Codigo: -4, Estado: 'Error', Mensaje: 'Ocurrio un error al ejecutar la solicitud.',Excepcion: Error });
            });
};


exports.InsertarAveria = async(Request, Response) => {
    await averiaDal.Post(Request.BD, Request.body)
        .then(function(Averia) {
                Response.status(200).send(Averia);
            },
            function(Error) {                
                Response.status(500).send({ Codigo: -4, Estado: 'Error', Mensaje: 'Ocurrio un error al ejecutar la solicitud.',Excepcion: Error });
            });
};

exports.ActualizarAveria = async(Request, Response) => {
    await averiaDal.Put(Request.BD, Request.body)
        .then(function(Averia) {
                Response.status(200).send(Averia);
            },
            function(Error) {                
                Response.status(500).send({ Codigo: -4, Estado: 'Error', Mensaje: 'Ocurrio un error al ejecutar la solicitud.',Excepcion: Error });
            });
};


exports.EliminarAveria = async(Request, Response) => {
    await averiaDal.Delete(Request.BD, Request.params.id)
        .then(function(Averia) {
                Response.status(200).send(Averia);
            },
            function(Error) {                
                Response.status(500).send({ Codigo: -4, Estado: 'Error', Mensaje: 'Ocurrio un error al ejecutar la solicitud.',Excepcion: Error });
            });
};

