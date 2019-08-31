const loginDal = require('../models/autenticacion.Dal');
var Nodemailer = require('nodemailer');
var Handlebars = require('handlebars');
var FS = require('fs');

exports.VerificarUsuario = async(Request, Response) => {
    await loginDal.Login(Request.BD, Request.body.usuario,Request.body.password )
        .then(function(Login) {
            if (Login[0].ID_TIPO == null) {                         
                Response.status(200).send({Codigo: 5, Estado: 'Exito', Existe: false, Tipo_Usuario: []});
            } 
            else {
                Response.status(200).send({Codigo: 5, Estado: 'Exito', Existe: true,Tipo_Usuario :Login[0].ID_TIPO});                                    
            }
        },
        function(Excepcion) {                
            Response.status(500).send({ Codigo: -4, Estado: 'Error', Mensaje: 'Ocurrio un error al ejecutar la solicitud.',Excepcion:Error });
        });
};

exports.RestablecerCredenciales = async(Request, Response) => {
    await loginDal.VerificarUsuario(Request.BD, Request.body.Usuario, Request.body.Email)
        .then(async function(Usuario) {
                if (Usuario[0].CONTRASEÑA != null) {

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
                                    Usuario: Request.body.Usuario,
                                    Password: Request.body.Password

                                };

                                var HtmlCoreo = Template(Remplazar);

                                var Mail = {
                                    from: process.env.MAIL_ADDRESS,
                                    to: Request.body.Email,
                                    subject: 'SOS - Recuperación de credenciales',
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
                                        Response.status(200).send({ Codigo: 5, Estado: 'Exito', Mensaje: 'Se enviaron las credenciales al correo dado.' });
                                    }
                                });
                            });
                        }                    
                 else {
                    Response.status(500).send({ Codigo: -4, Estado: 'Error', Mensaje: 'No existe ningun usuario que tenga ese correo electronico asociado o que tenga ese usuario.' });
                }
            },
            function(Excepcion) {
                Response.status(500).send({ Codigo: -4, Estado: 'Error', Mensaje: 'Ocurrio un error al ejecutar la solicitud.',ExcepcionError:Excepcion });
            });
};