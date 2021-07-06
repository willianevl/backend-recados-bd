import { NextFunction, Request, Response } from "express";

export default function NotesCamposObrigatorios(
    req: Request, 
    res: Response, 
    next: NextFunction
    ){
    const { title, description } = req.body;

    if(!title){
        return res.status(400).json({
            msg: "Insira o titúlo"
        });
    }

    if(!description){
        return res.status(400).json({
            msg: "Insira a descrição"
        });
    }

    next();
}