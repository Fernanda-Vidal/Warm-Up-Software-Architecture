import mongoose from "mongoose";

const autorSchema = new mongoose.Schema(
    { 
        id: { type: String },
        nome: { type: String, required: true },
        nacionalidade: { type: String }
    },
    {
        // para que o banco pare de armazenar
        // a informação sobre o versionamento
        versionKey: false
    }
)

const autores = mongoose.model("autores", autorSchema);

export default autores;