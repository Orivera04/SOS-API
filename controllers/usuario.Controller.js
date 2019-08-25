/* Se carga la capa de acceso a datos de esta entidad */
const usuarioDal = require('../../models/usuario.Dal.js');

exports.ObtenerUsuario = async(Request, Response) => {
    await usuarioDal.GetByID(Request.BD, Request.params.id)
        .then(function(Usuario) {
                Response.status(200).send(Usuario);
            },
            function(Error) {                
                Response.status(500).send({ Codigo: -4, Estado: 'Error', Mensaje: 'Ocurrio un error al ejecutar la solicitud.',Excepcion: Error });
            });
};


exports.InsertarUsuario = async(Request, Response) => {
    await usuarioDal.Post(Request.BD, Request.body)
        .then(function(Usuario) {
                Response.status(200).send(Usuario);
            },
            function(Error) {                
                Response.status(500).send({ Codigo: -4, Estado: 'Error', Mensaje: 'Ocurrio un error al ejecutar la solicitud.',Excepcion: Error });
            });
};

exports.ActualizarUsuario = async(Request, Response) => {
    await usuarioDal.Put(Request.BD, Request.body)
        .then(function(Usuario) {
                Response.status(200).send(Usuario);
            },
            function(Error) {                
                Response.status(500).send({ Codigo: -4, Estado: 'Error', Mensaje: 'Ocurrio un error al ejecutar la solicitud.',Excepcion: Error });
            });
};


exports.EliminarUsuario = async(Request, Response) => {
    await usuarioDal.Delete(Request.BD, Request.params.id)
        .then(function(Usuario) {
                Response.status(200).send(Usuario);
            },
            function(Error) {                
                Response.status(500).send({ Codigo: -4, Estado: 'Error', Mensaje: 'Ocurrio un error al ejecutar la solicitud.',Excepcion: Error });
            });
};

