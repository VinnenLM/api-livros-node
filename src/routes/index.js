import express from "express";
import editoras from "../routes/editorasRoutes.js";
import autores from "../routes/autoresRoutes.js";
import livros from "../routes/livrosRoutes.js";

const routes = (app) => {
    app.route('/').get((req, res) => {
        res.status(200).send({ titulo: "Curso de node" })
    })

    app.use(
        express.json(),
        livros,
        autores,
        editoras
    )

}

export default routes