const express = require('express');
const rutasVinos = require('./rutas/RutasVino');
const rutasRefresco = require('./rutas/RutasRefrescos');

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:false}));


app.use('/vinos',rutasVinos);

app.use('/refrescos',rutasRefresco);
module.exports = app;