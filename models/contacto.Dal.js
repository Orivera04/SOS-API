module.exports = {

    /* Añade un nuevo elemento a la colección */
    Post: (async function(BD, Contacto) {
        return new Promise(function(OK, Error) {
            BD.query("INSERT INTO `sos`.`USUARIO_CONTACTO`(`ID_USUARIO`,`MENSAJE`) VALUES (?,?,NOW())", [Contacto.ID_USUARIO,Contacto.MENSAJE],
                function(Err, Resultado) {
                    if (Err) {
                        Error(Err);
                    } else {
                        OK();
                    }
                });
        });
    }),

};
