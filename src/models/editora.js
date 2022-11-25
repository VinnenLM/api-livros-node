import mongoose from "mongoose";

const editoraSchema = new mongoose.Schema({
    id: { type: String },
    nome: { type: String, required: true },
    numFuncionarios: { type: Number, required: true },
    pais: { type: String, required: true },
    cnpj: { type: String, required: true },
})

const editoras = mongoose.model('editoras', editoraSchema)

export default editoras