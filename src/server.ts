import express from "express";
import path from "path";
import dotenv from "dotenv";
import { fileURLToPath } from "url";

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use("/dist", express.static(__dirname));
app.use(express.static(path.join(__dirname, "../public")));

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});