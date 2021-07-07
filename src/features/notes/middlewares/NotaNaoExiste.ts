import { NextFunction, Request, Response } from "express";
import { Notes } from "../../../core/data/database/entities/Notes";


export default async function NotaNaoExiste(
    req: Request, 
    res: Response, 
    next: NextFunction
    ){
    const { noteID } = req.params;

    const user = await Notes.findOne({id: noteID});
    if(!user){
        return res.status(404).json({
            msg: "Este recado não existe"
        });
    }

    next();
}