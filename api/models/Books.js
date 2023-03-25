const mongoose = require('mongoose');
const { Schema } = mongoose;

const bookSchema = new Schema({
  nome: {
    type: String,
    required: true
  },
  descricao: {
    type: String,
    required: true
  },
  autor: {
    type: String,
    required: true
  },
  data_cadastro: {
    type: String,
    required: true
  },
  usuarioId: {
    type: Schema.Types.ObjectId, // armazena o ID do usuário que criou o livro
    ref: 'User', // referencia o modelo User do Mongoose
    required: true
  }
});

const Book = mongoose.model('Book', bookSchema);

module.exports = Book;