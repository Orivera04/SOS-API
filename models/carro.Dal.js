module.exports = {

    /* Obtiene un elemento de la colección */
    GetByID: (async function(BD, ID) {
        return new Promise(function(OK, Error) {
            BD.query("SELECT * FROM USUARIO_CARRO WHERE ID_USUARIO = ?", [ID],
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
    Post: (async function(BD, Carro) {
        return new Promise(function(OK, Error) {
            BD.query("INSERT INTO `sos`.`USUARIO_CARRO`(`ID_USUARIO`,`MARCA_CARRO`,`AÑO_CARRO`,`COLOR_CARRO`,`MODELO_CARRO`,`PLACA_CARRO`,`IMAGEN_CARRO`) VALUES (?,?,?,?,?,?)", [Carro.ID_USUARIO,Carro.MARCA_CARRO,Carro.AÑO_CARRO,Carro.COLOR_CARRO,Carro.MODELO_CARRO,Carro.PLACA_CARRO,Carro.IMAGEN_CARRO],
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
    Put: (async function(BD, Carro) {
        return new Promise(function(OK, Error) {
            BD.query("UPDATE `sos`.`USUARIO_CARRO` SET  `MARCA_CARRO`=?,`AÑO_CARRO`=?,`COLOR_CARRO`=?,`MODELO_CARRO`=?,`PLACA_CARRO`=?,`IMAGEN_CARRO` = ? WHERE ID_USUARIO = ?", [Carro.MARCA_CARRO,Carro.AÑO_CARRO,Carro.COLOR_CARRO,Carro.MODELO_CARRO,Carro.PLACA_CARRO,Carro.IMAGEN_CARRO,Carro.ID_USUARIO],
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
            BD.query("DELETE FROM `sos`.`USUARIO_CARRO` WHERE ID_USUARIO = ?", [ID],
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





 