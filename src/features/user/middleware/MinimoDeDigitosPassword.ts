import { NextFunction, Request, Response } from "express";

export default function PasswordMinimoDeCaracteres(
    req: Request, 
    res: Response, 
    next: NextFunction
    ){
    const { password } = req.body;

    if(password.trim().length < 6) {
        return res.status(400).json({
            msg: "A senha deve conter mais que 6 caracteres"
        });
    }

    next();
}