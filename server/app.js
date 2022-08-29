// traemos express 
const express = require('express');

//const bodyParser = require('body-parser');

const app = express() ;
const {API_VERSION} = require('./config');

//cargando rutas de user
const userRoutes = require('./routes/user');


//para poder tomar datos del body de la peticion
app.use(express.json());
// app.use(bodyParser.urlencoded({extended : true}));
// app.use(bodyParser.json());

//Configure Header HTTP
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
      "Access-Control-Allow-Headers",
      "Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method"
    );
    res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
    res.header("Allow", "GET, POST, OPTIONS, PUT, DELETE");
    next();
  });

//router 
app.use(`/api/${API_VERSION}`,userRoutes);


module.exports = app ;