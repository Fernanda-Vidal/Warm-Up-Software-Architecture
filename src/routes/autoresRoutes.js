import express from "express";
import AutoresController from "../controllers/autoresController.js";

const router = express.Router();

router
    .get("/autores", AutoresController.listarAutores)
    .get("/autores/:id", AutoresController.buscarAutor)
    .post("/autores", AutoresController.cadastrarAutor)
    .put("/autores/:id", AutoresController.editarAutor)
    .delete("/autores/:id", AutoresController.excluirAutor)

export default router;