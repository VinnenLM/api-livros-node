import mongoose from "mongoose";

mongoose.connect("mongodb+srv://jinwoo:123321@cluster-0.v9witss.mongodb.net/alura-livros")

let db = mongoose.connection

export default db