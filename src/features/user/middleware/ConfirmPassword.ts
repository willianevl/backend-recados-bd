import { NextFunction, Request, Response } from "express";

export default function ConfirmPasswords(
    req: Request, 
    res: Response, 
    next: NextFunction
    ){
    const { confirmPassword, password } = req.body;

    if(!password){
        return res.status(400).json({
            msg: "Insira uma senha"
        });
    }

    if(confirmPassword !== password) {
        return res.status(400).json({
            msg: "As senhas devem coincidir"
        });
    }

    next();
}