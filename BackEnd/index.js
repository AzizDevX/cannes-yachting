import express from "express";
import dotenv from "dotenv";
import dbconnection from "./config/dbConnect.js";
import Auth from "./routers/auth.js";
const app = express();
app.use(express.json());
dotenv.config();
const port = process.env.port;
dbconnection();

app.get("/", (req, res) => {
  res.send("Server Alive");
});

app.use("/", Auth);

app.listen(port, () => {
  console.log(`Server Alive At port ${port}`);
});
