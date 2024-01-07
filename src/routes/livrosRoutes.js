import express from "express";
import LivroController from "../controllers/livrosController.js";

const router = express.Router();

router
    .get("/livros", LivroController.listarLivros)
    .get("/livros/busca", LivroController.listarLivrosPorEditora)
    .get("/livros/:id", LivroController.buscarLivro)
    .post("/livros", LivroController.cadastrarLivro)
    .put("/livros/:id", LivroController.editarLivro)
    .delete("/livros/:id",LivroController.excluirLivro)

export default router;