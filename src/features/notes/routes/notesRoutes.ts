import { Router } from "express";
import NotesController from "../controllers/notesControllers";
import NotesCamposObrigatorios from "../middlewares/NotesCamposObrigatorios";

export default class NotesRoutes {
    public init(): Router {
      const routes = Router();
  
      const controller = new NotesController();
  
        routes.post("/notes/:userID", [NotesCamposObrigatorios], controller.store);
        routes.put("/notes/:id", [NotesCamposObrigatorios], controller.update);
        routes.delete("/notes/:id", controller.delete);
        routes.get("/notes", controller.show);
  
      return routes;
    }
  }