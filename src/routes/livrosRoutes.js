import express from 'express';
import LivroController from '../controller/livrosController.js';

const router = express.Router();

router
    .get("/livros", LivroController.listarLivros)
    .get("/livros/editora", LivroController.listarLivroPorEditora)
    .get("/livros/:id", LivroController.listarLivroPorId)
    .post("/livros", LivroController.cadastrarLivros)
    .put("/livros/:id", LivroController.atualizarLivro)
    .delete("/livros/:id", LivroController.excluirLivro)

export default router