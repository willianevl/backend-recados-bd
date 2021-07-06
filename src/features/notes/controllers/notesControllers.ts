import { Request, Response } from "express";
import { Notes } from "../../../core/data/database/entities/Notes";


export default class NotesController {
    public async store(req: Request, res: Response){
        const { title, description, userID } = req.body;

        try {
            const note = await new Notes(title, description, userID).save();

            return res.status(201).json(note);
        } catch (error) {
            return res.status(500).json(error)
        }
    }

    public async update(req: Request, res: Response){
        const { title, description } = req.body;
        const { id } = req.params;

        const note = await Notes.update(id, {
            title,
            description
        });

        return res.status(200).json((note.affected as number > 0) ? "Nota alterado": "Falha na requisição")
    }

    public async delete(req: Request, res: Response){
        const { id } = req.params;

        const note = await Notes.delete(id);

        return res.status(200).json((note.affected as number > 0)? "Nota excluído": "Falha na exclusão");
    }
}