const mongoose = require('mongoose');

const RefrescosSchema = new mongoose.Schema({
    codigo:{
        type: Number,
        unique:true
    },
    nombre:{
        type: String,
        required:true
    },
    descripcion:{
        type: String,
        required:true
    },
    precio:{
        type: Number,
        required:true
    },
    fecha:{
        type: Date,
        default: Date.now
    }
})

const Refresco = mongoose.model('Refresco', RefrescosSchema);
module.exports = Refresco;