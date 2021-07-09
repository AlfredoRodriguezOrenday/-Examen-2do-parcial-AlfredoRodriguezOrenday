const mongoose = require('mongoose');
const CONFIG = require('../configuracion/config');

module.exports = {
    connection : null,
    connect : function(){
        if(this.connection) return this.connection
        return mongoose.connect(CONFIG.BD).then(conexion =>{ //la funciones flechas se ejecutan de manera inmediata y solo se usa en funciones que necesitamos que se utilice al momento y que se ejecutan una sola vez
            this.connection = conexion;
            console.log("La conexion se realizo correctamente");
        }).catch(error => console.log(error));
    }
}