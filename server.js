import app from "./src/app.js";

const port = process.env.PORT || 3333;

app.listen(port, () => {
    console.log(`Escutando na porta ${port}`);
})