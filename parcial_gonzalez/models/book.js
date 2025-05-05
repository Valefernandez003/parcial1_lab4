const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
titulo: { type:String, required:true},
resumen:String,
genero: { type:String , Enum:['novela','poesia','ensayo'], required:true},
publicacion: {type:Date, required:true},
disponible: Boolean,
})

module.exports = mongoose.model('Books',bookSchema);