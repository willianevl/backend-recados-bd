import { Router } from "express";
import CheckedNotesController from "../controllers/checkedNotesController";


export default class NotesRoutes {
    public init(): Router {
      const routes = Router();
  
      const controller = new CheckedNotesController();
  
        routes.post("/noteschecked/:userID", controller.store);
        routes.get("/noteschecked/:userID", controller.CheckedNotesByUserID);
  
      return routes;
    }
  }