import { NextFunction, Request, Response } from "express";
import { User } from "../../../core/data/database/entities/User";

export default async function UsernameJaExiste(
    req: Request, 
    res: Response, 
    next: NextFunction
    ){
    const { username } = req.body;

    const existe = await User.findOne({username: username});
    if(existe){
        return res.status(400).json({
            msg: "Este nome de usuário já existe"
        });
    }


    next();
}