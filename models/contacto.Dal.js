module.exports = {

    /* Añade un nuevo elemento a la colección */
    Post: (async function(BD, Contacto) {
        return new Promise(function(OK, Error) {
            BD.query("INSERT INTO `sos`.`USUARIO_CONTACTO`(`ID_USUARIO`,`MENSAJE`,`FECHA`) VALUES (?,?,NOW())", [Contacto.ID_USUARIO,Contacto.MENSAJE],
                function(Err, Resultado) {
                    if (Err) {
                        Error(Err);
                    } else {
                        OK();
                    }
                });
        });
    }),

      /* Obtener Correos */
      Put: (async function(BD) {
        return new Promise(function(OK, Error) {
            BD.query("SELECT EMAIL_USUARIO  FROM USUARIO WHERE ID_TIPO = 2;", [],
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
