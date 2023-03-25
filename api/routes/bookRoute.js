const router = require('express').Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const Book = require('../models/Books')

function checkToken(req, res, next){
    const authHeader = req.headers.authorization;
    const token = authHeader && authHeader.split(' ')[1]; // split to get the second value of the header

    if(!token){
        return res.status(401).json({msg: "Não autorizado"});
    }
    try {
        const secret = process.env.SECRET;
        const decodedToken = jwt.verify(token, secret); //token decode
        req.user_id = decodedToken.id; // Define a propriedade user_id no objeto req do metodo que usar
        
        next();
      } catch (error) {
        console.log(error);
        res.status(400).json({ msg: 'Token inválido' });
      }
}

// cadastra os livros por usuario
router.post('/', checkToken, (req, res) => {
    const book = new Book({
      nome: req.body.nome,
      descricao: req.body.descricao,
      autor: req.body.autor,
      data_cadastro: req.body.data_cadastro,
      usuarioId: req.user_id // obtém o ID do usuário a partir do objeto req
    });
  
    book.save()
      .then(result => {
        res.status(201).json({
          message: 'Livro criado com sucesso',
          book: result
        });
      })
      .catch(error => {
        res.status(500).json({
          message: 'Erro ao criar livro',
          error: error
        });
      });
  });

// Rota para listar os produtos do usuário atual
router.get('/myBooks', checkToken, async (req, res) => {
  try {
    const book = await Book.find({ usuarioId: req.user_id });
    res.json(book);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Erro ao listar produtos.' });
  }
});

// lista todos os livros do banco
router.get('/all', checkToken, async (req, res) => {
    try {
      const books = await Book.find();
      res.json(books);
    } catch (error) {
      console.log(error);
      res.status(500).json({ msg: 'Erro ao buscar produtos' });
    }
  });

  // edita apenas seu proprio livro
router.put('/:id', checkToken, async (req, res) => {
    const { nome, descricao, autor } = req.body;
    const bookId = req.params.id;
    const userId = req.user_id; // Obtém o ID do usuário do objeto req definido pelo middleware checkToken()
  
    try {
      const book = await Book.findById(bookId);
      if (!book) {
        return res.status(404).json({ msg: 'Livro não encontrado' });
      }
      
    //   trava o user com seu id atrelado ao livro
      if (book.usuarioId.toString() !== userId) {
        return res.status(401).json({ msg: 'Não autorizado' });
      }
  
      book.nome = nome || book.nome;
      book.descricao = descricao || book.descricao;
      book.autor = autor || book.autor;
  
      const bookAtualizado = await book.save();
      res.json(bookAtualizado);
    } catch (error) {
      console.log(error);
      res.status(500).json({ msg: 'Erro ao atualizar livro' });
    }
});

router.delete('/:id', checkToken, async (req, res) => {
    const bookId = req.params.id;
    const userId = req.user_id; // Obtém o ID do usuário do objeto req definido pelo middleware checkToken()
  
    try {
      const book = await Book.findById(bookId);
      if (!book) {
        return res.status(404).json({ msg: 'Livro não encontrado' });
      }
      
      // Verifica se o usuário logado é o dono do livro
      if (book.usuarioId.toString() !== userId) {
        return res.status(401).json({ msg: 'Não autorizado' });
      }
  
      // Remove o livro da coleção books
      await Book.deleteOne({_id: bookId});
  
      res.json({ msg: 'Livro removido com sucesso' });
    } catch (error) {
      console.log(error);
      res.status(500).json({ msg: 'Erro ao excluir livro' });
    }
  });


  // usuario admin atualiza qualquer livro
router.put('/admin/:id', checkToken, async (req, res) => {
  const { nome, descricao, autor } = req.body;
  const bookId = req.params.id;
  
  try {
    const book = await Book.findById(bookId);
    if (!book) {
      return res.status(404).json({ msg: 'Livro não encontrado' });
    }
    
    book.nome = nome || book.nome;
    book.descricao = descricao || book.descricao;
    book.autor = autor || book.autor;

    const bookAtualizado = await book.save();
    res.json(bookAtualizado);
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: 'Erro ao atualizar livro' });
  }
});

// admin exclui qualquer livro
router.delete('/admin/:id', checkToken, async (req, res) => {
  const bookId = req.params.id;

  try {
    const book = await Book.findById(bookId);
    if (!book) {
      return res.status(404).json({ msg: 'Livro não encontrado' });
    }
    
    await Book.deleteOne({_id: bookId});

    res.json({ msg: 'Livro removido com sucesso' });
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: 'Erro ao excluir livro' });
  }
});


module.exports = router;