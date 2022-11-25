import livros from "../models/livro.js";

class LivroController {

    static listarLivros = (req, res) => {
        livros
            .find()
            .populate('autor')
            .exec((error, livros) => {
                res.status(200).json(livros);
            })
    }

    static listarLivroPorId = (req, res) => {
        const id = req.params.id;
        livros.findById(id, (error, livros) => {
            if (error) {
                res.status(500).send({ message: "Erro " + error.message })
            } else {
                res.status(200).send(livros.toJSON())
            }
        })
    }

    static listarLivroPorEditora = (req, res) => {
        const editora = req.query.editora;
        livros.find({ 'editora': editora }, {}, (error, livro) => {
            if (error) {
                res.status(500).send({ message: "Erro " + error.message })
            } else {
                res.status(200).send(livro)
            }
        })
    }

    static cadastrarLivros = (req, res) => {
        let livro = new livros(req.body);
        livro.save((error) => {
            if (error) {
                res.status(500).send({ message: "Erro " + error.message })
            } else {
                res.status(201).send(livro.toJSON())
            }
        })
    }

    static atualizarLivro = (req, res) => {
        const id = req.params.id;
        livros.findByIdAndUpdate(id, { $set: req.body }, (error) => {
            if (!error) {
                res.status(200).send({ message: 'Livro atualizado com sucesso' })
            } else {
                res.status(500).send({ message: "Erro " + error.message })
            }
        })
    }

    static excluirLivro = (req, res) => {
        const id = req.params.id;
        livros.findByIdAndDelete(id, (error) => {
            if (!error) {
                res.status(200).send({ message: 'Livro excluído com sucesso' })
            } else {
                res.status(500).send({ message: "Erro " + error.message })
            }
        })
    }

}

export default LivroController 