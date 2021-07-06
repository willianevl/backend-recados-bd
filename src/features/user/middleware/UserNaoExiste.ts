import { NextFunction, Request, Response } from "express";
import { User } from "../../../core/data/database/entities/User";

export default async function UserNaoExiste(
    req: Request, 
    res: Response, 
    next: NextFunction
    ){
    const { id } = req.params;

    const existe = await User.findOne(id);
    if(!existe){
        return res.status(404).json({
            msg: "Este ID de usuário não existe"
        });
    }


    next();
}