module.exports = {
   
    /* Verifica si el usuario existe */
    Login: (async function(BD, Usuario,Password) {
        return new Promise(function(OK, Error) {            
            BD.query("SELECT COUNT(*),TU.NOMBRE_TIPO,TU.ID_TIPO FROM USUARIO U,TIPO_USUARIO TU WHERE U.USUARIO = ? AND U.CONTRASEÑA = ? AND TU.ID_TIPO = U.ID_TIPO;", [Usuario,Password],
                function(Err, Fila,) {
                    if (Err) {
                        Error(Err);
                    } else {
                        OK(Fila);
                    }
                });
        });
    }), 

    /* Verifica si la contraseña existe */
    VerificarUsuario: (async function(BD, Usuario,Email) {
        return new Promise(function(OK, Error) {            
            BD.query("SELECT CONTRASEÑA FROM USUARIO U WHERE U.USUARIO = ? AND U.EMAIL_USUARIO = ?;", [Usuario,Email],
                function(Err, Fila,) {
                    if (Err) {
                        Error(Err);
                    } else {
                        OK(Fila);
                    }
                });
        });
    }), 

    /* Resteblece la contraseña */
    RecuperarContraseña: (async function(BD, Usuario,Password) {
        return new Promise(function(OK, Error) {            
            BD.query("UPDATE USUARIO SET CONTRASEÑA = ? WHERE ID_USUARIO = ?;", [Password,Usuario],
                function(Err, Fila,) {
                    if (Err) {
                        Error(Err);
                    } else {
                        OK(Fila);
                    }
                });
        });
    }), 

};