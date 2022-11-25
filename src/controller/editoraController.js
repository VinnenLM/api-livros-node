import editoras from "../models/editora.js";

class EditoraController {

    static listarEditoras = (req, res) => {
        editoras.find((error, editoras) => {
            res.status(200).json(editoras);
        })
    }

    static listarEditoraPorId = (req, res) => {
        const id = req.params.id;
        editoras.findById(id, (error, editora) => {
            if (error) {
                res.status(500).send({ message: "Erro " + error.message })
            } else {
                res.status(200).send(editora.toJSON())
            }
        })
    }

    static cadastrarEditora = (req, res) => {
        let editora = new editoras(req.body);
        editora.save((error) => {
            if (error) {
                res.status(500).send({ message: "Erro " + error.message })
            } else {
                res.status(201).send(editor.toJSON())
            }
        })
    }

    static atualizarEditora = (req, res) => {
        const id = req.params.id;
        editoras.findByIdAndUpdate(id, { $set: req.body }, (error) => {
            if (!error) {
                res.status(200).send({ message: 'Editora atualizada com sucesso' })
            } else {
                res.status(500).send({ message: "Erro " + error.message })
            }
        })
    }

    static excluirEditora = (req, res) => {
        const id = req.params.id;
        editoras.findByIdAndDelete(id, (error) => {
            if (!error) {
                res.status(200).send({ message: 'Editora excluída com sucesso' })
            } else {
                res.status(500).send({ message: "Erro " + error.message })
            }
        })
    }

}

export default EditoraController