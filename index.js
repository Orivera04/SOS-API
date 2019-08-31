/* Librerias a ultilizar */
require('dotenv').config();

/* Inicialización de variables */
const Express = require('express');
const Logger = require('morgan');
const BodyParser = require('body-parser');
const APP = Express();
const Router = Express.Router();
const ApiRoutes = require('./routes/api.Routes.js');
var MysqlDB = require('mysql');
var Cors=require('cors');



/* Configurando peticiones */
APP.use(BodyParser.json());
APP.use(Cors({origin:true,credentials: true}));
APP.use(BodyParser.urlencoded({
    extended: true
}));

/* Configurando conexion con la BD */
var Conexion = MysqlDB.createPool({
    connectionLimit: 100,
    host: process.env.BD_CONECTIONSTRING,
    user: process.env.BD_USER,
    password: process.env.BD_PASSWORD,
    database: process.env.BD_NAME,
    debug: false
});


/* Configurando Middleware de BD */
APP.use((Request, Response, Next) => {
    Request.BD = Conexion;
    Next();
});

/* Pretty Print */
APP.set('json spaces', 2);

/* Inicializando morgan para depurar las peticiones */
APP.use(Logger('dev'));

/* Definiendo las rutas */
APP.use('/api/v1', Router);
ApiRoutes(Router);

/* Configurando Listener de la APP */
APP.listen(process.env.PORT || 3000, () => {
    console.log(`-> La api se esta ejecutando.`);
});

module.exports = APP;