module.exports = {

    /* Obtiene un elemento de la colección */
    GetByID: (async function(BD, ID) {
        return new Promise(function(OK, Error) {
            BD.query("SELECT * FROM USUARIO U,TIPO_USUARIO TU WHERE U.ID_USUARIO = ? AND TU.ID_TIPO = U.ID_TIPO;", [ID],
                function(Err, Filas) {
                    if (Err) {
                        Error(Err);
                    } else {
                        OK(Filas);
                    }
                });
        });
    }),


    /* Añade un nuevo elemento a la colección */
    Post: (async function(BD, Usuario) {
        return new Promise(function(OK, Error) {
            BD.query("INSERT INTO `sos`.`USUARIO`(`USUARIO`,`CONTRASEÑA`,`ID_TIPO`,`NOMBRE_USUARIO`,`APELLIDO_USUARIO`,`TELEFONO_USUARIO`,`EMAIL_USUARIO`,`DIRECCION`,`CIUDAD`,`PAIS`,`CEDULA`) VALUES (?,?,?,?,?,?,?,?,?,?,?);", [Usuario.USUARIO,Usuario.CONTRASEÑA,Usuario.ID_TIPO,Usuario.NOMBRE_USUARIO,Usuario.APELLIDO_USUARIO,Usuario.TELEFONO_USUARIO,Usuario.EMAIL_USUARIO,Usuario.DIRECCION,Usuario.CIUDAD,Usuario.PAIS,Usuario.CEDULA],
                function(Err, Resultado) {
                    if (Err) {
                        Error(Err);
                    } else {
                        OK();
                    }
                });
        });
    }),

    /* Actualiza un nuevo elemento a la colección */
    Put: (async function(BD, Usuario) {
        return new Promise(function(OK, Error) {
            BD.query("UPDATE `sos`.`USUARIO` SET `CONTRASEÑA` = ?, `ID_TIPO` = ?, `NOMBRE_USUARIO` = ?, `APELLIDO_USUARIO` = ?, `TELEFONO_USUARIO` = ?, `EMAIL_USUARIO` = ?, `DIRECCION` = ?, `CIUDAD` = ?, `PAIS` = ?, `CEDULA` = ?, WHERE `ID_USUARIO` = ?", [Usuario.CONTRASEÑA,Usuario.ID_TIPO,Usuario.NOMBRE_USUARIO,Usuario.APELLIDO_USUARIO,Usuario.TELEFONO_USUARIO,Usuario.EMAIL_USUARIO,Usuario.DIRECCION,Usuario.CIUDAD,Usuario.PAIS,Usuario.CEDULA,Usuario.ID_USUARIO],
                function(Err, Resultado) {
                    if (Err) {
                        Error(Err);
                    } else {
                        OK();
                    }
                });
        });
    }),

    /* Elimina un elemento de la colección */
    Delete: (async function(BD, ID) {
        return new Promise(function(OK, Error) {
            BD.query("DELETE FROM `sos`.`USUARIO` WHERE ID_USUARIO = ?", [ID],
                function(Err, Resultado) {
                    if (Err) {
                        Error(Err);
                    } else {
                        OK();
                    }
                });
        });
    })

};












