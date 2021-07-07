import { NextFunction, Request, Response } from "express";
import { User } from "../../../core/data/database/entities/User";

export default async function UsuarioNaoExiste(
    req: Request, 
    res: Response, 
    next: NextFunction
    ){
    const { userID } = req.params;

    const user = await User.findOne({id: userID});
    if(!user){
        return res.status(404).json({
            msg: "Este usuário não existe"
        });
    }

    next();
}