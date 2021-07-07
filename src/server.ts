import cors from "cors";
import express from "express";

import Database from "./core/data/connections/Database";
import NotesRoutes from "./features/notes/routes/notesRoutes";
import UserRoutes from "./features/user/routes/userRoutes";
import CheckedNotesRoutes from "./features/checkedNotes/routes/checkedNotesRoutes";

const app = express();
// Receber json no corpo da Requisição
app.use(express.json());
app.use(cors());

// Vincular as rotas
const userRoutes = new UserRoutes().init();
const notesRoutes = new NotesRoutes().init();
const checkedNotesRoutes = new CheckedNotesRoutes().init();

app.use(userRoutes, notesRoutes, checkedNotesRoutes);

const init = async () => {
  await new Database().openConnection();
  app.listen(process.env.PORT || 3000, () => {
    console.log("Rodando");
  });
};

init();
