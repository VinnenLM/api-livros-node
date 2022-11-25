import autores from "../models/autor.js";

class AutorController {

    static listarAutores = (req, res) => {
        autores.find((error, autores) => {
            res.status(200).json(autores);
        })
    }

    static listarAutorPorId = (req, res) => {
        const id = req.params.id;
        autores.findById(id, (error, autor) => {
            if (error) {
                res.status(500).send({ message: "Erro " + error.message })
            } else {
                res.status(200).send(autor.toJSON())
            }
        })
    }

    static cadastrarAutor = (req, res) => {
        let autor = new autores(req.body);
        autor.save((error) => {
            if (error) {
                res.status(500).send({ message: "Erro " + error.message })
            } else {
                res.status(201).send(autor.toJSON())
            }
        })
    }

    static atualizarAutor = (req, res) => {
        const id = req.params.id;
        autores.findByIdAndUpdate(id, { $set: req.body }, (error) => {
            if (!error) {
                res.status(200).send({ message: 'Autor atualizado com sucesso' })
            } else {
                res.status(500).send({ message: "Erro " + error.message })
            }
        })
    }

    static excluirAutor = (req, res) => {
        const id = req.params.id;
        autores.findByIdAndDelete(id, (error) => {
            if (!error) {
                res.status(200).send({ message: 'Autor excluído com sucesso' })
            } else {
                res.status(500).send({ message: "Erro " + error.message })
            }
        })
    }

}

export default AutorController 