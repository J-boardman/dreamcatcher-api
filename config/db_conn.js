import mongoose from "mongoose";

export default () => {
  mongoose.connect(process.env.DB_URL, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  });
  
  const db = mongoose.connection;
  
  db.on("error", console.error.bind(console, "Mongo connection error"));
}