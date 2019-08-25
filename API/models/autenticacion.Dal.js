module.exports = {
   
    /* Verifica si el usuario existe */
    Login: (async function(BD, Usuario,Password) {
        return new Promise(function(OK, Error) {
            // Verifica si el usuario existe jalando el hash y su rol //
            BD.query("select count(*),id_rol from usuario where usuario = ? and contra  = ?", [Usuario,Password],
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