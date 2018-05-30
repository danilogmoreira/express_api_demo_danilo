const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var vinhoSchema   = new Schema({
    nome: String,
    nota: Number,
});

module.exports = mongoose.model('vinho', vinhoSchema);