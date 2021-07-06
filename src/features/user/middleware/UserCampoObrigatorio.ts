import { NextFunction, Request, Response } from "express";

export default function UserCamposObrigatorios(
    req: Request, 
    res: Response, 
    next: NextFunction
    ){
    const { username } = req.body;

    if(!username) {
        return res.status(400).json({
            msg: "Insira um nome de usuário"
        });
    }

    next();
}