import express from "express";

import Database from "./core/data/connections/Database";
import NotesRoutes from "./features/notes/routes/notesRoutes";
import UserRoutes from "./features/user/routes/userRoutes";

const app = express();
// Receber json no corpo da Requisição
app.use(express.json());

// Vincular as rotas
const userRoutes = new UserRoutes().init();
const notesRoutes = new NotesRoutes().init();

app.use(userRoutes, notesRoutes);

const init = async () => {
  await new Database().openConnection();
  app.listen(process.env.PORT || 3000, () => {
    console.log("Rodando");
  });
};

init();
