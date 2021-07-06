import { Router } from "express";
import UserController from "../controllers/userControllers";
import ConfirmPasswords from "../middleware/ConfirmPassword";
import PasswordMinimoDeCaracteres from "../middleware/MinimoDeDigitosPassword";
import UserCamposObrigatorios from "../middleware/UserCampoObrigatorio";
import UsernameJaExiste from "../middleware/UsernameJaExiste";
import UserNaoExiste from "../middleware/UserNaoExiste";


export default class UserRoutes {
    public init(): Router {
      const routes = Router();
  
      const controller = new UserController();
  
      routes.post("/user", [UserCamposObrigatorios, ConfirmPasswords, PasswordMinimoDeCaracteres, UsernameJaExiste], controller.store);
      routes.put("/user/:id", [UserCamposObrigatorios, UserNaoExiste, ConfirmPasswords], controller.update);
      routes.delete("/user/:id", [UserNaoExiste], controller.delete);
      routes.get("/user", controller.show);
  
      return routes;
    }
  }