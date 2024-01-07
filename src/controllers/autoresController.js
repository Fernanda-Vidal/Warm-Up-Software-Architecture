import autores from "../models/Autor.js";

class AutorController {

    static listarAutores = (req, res) => {
        autores.find((err, autores) => {
            res.status(200).json(autores);
        })
    }

    static buscarAutor = async (req, res) => {
        const { id } = req.params;
        autores.findById(id)
            .populate('nome')
            .exec((err, autores) => {
                if(err) {
                    res.status(400).send({ message: `${err.message} - Id do Autor não localizado.` })
                } else {
                    res.status(200).send(autores)
                }
            })
    }

    static cadastrarAutor = (req, res) => {
        const Autor = new autores(req.body);

        Autor.save((err) => {
            if (err) {
                res.status(500).send({message: `${err.message} - falha ao cadastrar Autor.`})
            } else {
                res.status(201).send(Autor.toJSON())
            }
        })
    }

    static editarAutor = (req, res) => {
        const { id } = req.params;

        autores.findByIdAndUpdate(id, { $set: req.body }, (err) => {
            if (!err) {
                res.status(200).send({ message: "O Autor foi editado com sucesso."})
            } else {
                res.status(500).send({ message: err.message })
            }
        })
    }

    static excluirAutor = (req, res) => {
        const { id } = req.params;
        
        autores.findByIdAndDelete(id, (err) => {
            if (!err) {
                res.status(200).send({message: "Autor removido com sucesso"})
            } else { 
                res.status(500).send({message: err.message})
            }
        })
    }
}

export default AutorController;