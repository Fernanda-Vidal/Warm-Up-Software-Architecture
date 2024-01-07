import mongoose from "mongoose";

mongoose.connect("mongodb+srv://fevidaljesus:fefe1987@node-express.nhwgh46.mongodb.net/alura-node");

let db = mongoose.connection;

export default db;
