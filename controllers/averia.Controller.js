/* Se carga la capa de acceso a datos de esta entidad */
const averiaDal = require('../models/averia.Dal.js');
var Nodemailer = require('nodemailer');
var Handlebars = require('handlebars');
var FS = require('fs');

exports.ObtenerListaAverias = async(Request, Response) => {
    await averiaDal.GetAll(Request.BD, Request.params.id,Request.params.usuario)
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
            
            var HtmlFile = function(Ruta, Callback) {
                FS.readFile(Ruta, { encoding: 'utf-8' }, function(Err, HTML) {
                    if (Err) {
                        throw Err;
                    } else {
                        Callback(null, HTML);
                    }
                });
            };
    
            HtmlFile('assets/correo.html', function(Err, Html) {
    
                var Template = Handlebars.compile(Html);
                var Remplazar = {                
                    Nombre: Request.body.ID_USUARIO,
                    Latitud: Request.body.LATITUD_UBICACION,
                    Longitud: Request.body.LONGITUD_UBICACION
                };
    
                var HtmlCoreo = Template(Remplazar);
    
                var Mail = {
                    from: process.env.MAIL_ADDRESS,
                    to: Averia[I].EMAIL_USUARIO,
                    subject: 'SOS - Notificacion',
                    html: HtmlCoreo
                };
                
                var SMTPTransport = require('nodemailer-smtp-transport');
                SMTPTransport = Nodemailer.createTransport(SMTPTransport({
                    service: 'gmail',
                    auth: {
                        user: process.env.MAIL_ADDRESS,
                        pass: process.env.MAIL_PASSWORD
                    }
                }));
    
                SMTPTransport.sendMail(Mail, function(Erro, Respon) {
                    if (Erro) {                                        
                        Response.status(401).send({ Codigo: -10, Estado: 'false', Mensaje: 'Ocurrio un error al enviar el correo electronico a la cuenta dada.',Excepcion:Erro});
                    } else {
                        Response.status(200).send({Codigo: 5, Estado : "Exito"});
                    }
                });
            });
    
    });
};    

exports.ActualizarAveria = async(Request, Response) => {
    await averiaDal.Put(Request.BD, Request.body)
        .then(function(Averia) {
                Response.status(200).send({Codigo: 5, Estado : "Exito"});
            },
            function(Error) {                
                Response.status(500).send({ Codigo: -4, Estado: 'Error', Mensaje: 'Ocurrio un error al ejecutar la solicitud.',Excepcion: Error });
            });
};


exports.EliminarAveria = async(Request, Response) => {
    await averiaDal.Delete(Request.BD, Request.body)
        .then(function(Averia) {
                Response.status(200).send({Codigo: 5, Estado : "Exito"});
            },
            function(Error) {                
                Response.status(500).send({ Codigo: -4, Estado: 'Error', Mensaje: 'Ocurrio un error al ejecutar la solicitud.',Excepcion: Error });
            });
};



