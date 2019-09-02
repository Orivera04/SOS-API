module.exports = {
    
    /* Obtiene un elemento de la colección */
    GetAll: (async function(BD, Tipo_Filtro,USUARIO) {
        return new Promise(function(OK, Error) {

            // Todas las las averias de un usuario 
            if(Tipo_Filtro == 1){
                BD.query("SELECT A.*,U.NOMBRE_USUARIO,U.APELLIDO_USUARIO,EA.DESCRIPCION_ESTADO  FROM AVERIA A,USUARIO U,ESTADO_AVERIA EA WHERE A.ID_USUARIO = U.USUARIO AND EA.ID_ESTADO = A.ID_ESTADO AND A.ID_USUARIO = ?", [USUARIO],
                    function(Err, Filas) {
                        if (Err) {
                            Error(Err);
                        } else {
                            OK(Filas);
                        }
                    });
            }

            // Todas las averias sin atender o en progreso
            else if(Tipo_Filtro == 2){    
                BD.query("SELECT A.*,U.NOMBRE_USUARIO,U.APELLIDO_USUARIO,EA.DESCRIPCION_ESTADO FROM AVERIA A,USUARIO U,ESTADO_AVERIA EA WHERE A.ID_USUARIO = U.USUARIO AND EA.ID_ESTADO = A.ID_ESTADO AND A.ID_ESTADO IN (1,2);", [],
                    function(Err, Filas) {
                        if (Err) {
                            Error(Err);
                        } else {
                            OK(Filas);
                        }
                    });
                }    
        });
    }),

    /* Obtiene un elemento de la colección */
    GetByID: (async function(BD, ID) {
        return new Promise(function(OK, Error) {
            BD.query("SELECT A.*,U.NOMBRE_USUARIO,U.APELLIDO_USUARIO,U.TELEFONO_USUARIO FROM AVERIA A, USUARIO U WHERE A.ID_AVERIA = ? AND U.USUARIO = A.ID_USUARIO", [ID],
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
    Post: (async function(BD, Averia) {
        return new Promise(function(OK, Error) {
            BD.query("INSERT INTO `sos`.`AVERIA` (`ID_USUARIO`,`LATITUD_UBICACION`,`LONGITUD_UBICACION`,`CALLE`,`PROVINCIA`,`DEPARTAMENTO`,`DATOS_ADICIONALES`,`FECHA_AVERIA`,`CALIFICACION`,`ID_ESTADO`) VALUES (?,?,?,?,?,?,?,NOW(),?,?);", [Averia.ID_USUARIO,Averia.LATITUD_UBICACION,Averia.LONGITUD_UBICACION,Averia.CALLE,Averia.PROVINCIA,Averia.DEPARTAMENTO,Averia.DATOS_ADICIONALES,Averia.CALIFICACION,1],
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
    Put: (async function(BD, Averia) {
        return new Promise(function(OK, Error) {
            BD.query("UPDATE `sos`.`AVERIA` SET `ID_USUARIO` = ?, `LATITUD_UBICACION` = ?, `LONGITUD_UBICACION` = ?, `CALLE` = ?, `PROVINCIA` = ?, `DEPARTAMENTO` = ?, `DATOS_ADICIONALES` = ?, `FECHA_AVERIA` = ?, `CALIFICACION` = ?, `ID_ESTADO` = ?,`ID_MECANICO` = ? WHERE `ID_AVERIA` = ?", [Averia.ID_USUARIO,Averia.LATITUD_UBICACION,Averia.LONGITUD_UBICACION,Averia.CALLE,Averia.PROVINCIA,Averia.DEPARTAMENTO,Averia.DATOS_ADICIONALES,Averia.FECHA_AVERIA,Averia.CALIFICACION,Averia.ID_ESTADO,Averia.ID_MECANICO,Averia.ID_AVERIA],
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
            BD.query("DELETE FROM `sos`.`AVERIA` WHERE ID_AVERIA = ?", [ID],
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

