import { Request, Response } from "express";
import { CheckedNotes } from "../../../core/data/database/entities/CheckedNotes";



export default class CheckedNotesController {
    public async store(req: Request, res: Response){
        const { title, description} = req.body;
        const { userID } = req.params;

        try {
            const note = await new CheckedNotes(title, description, userID).save();

            return res.status(201).json(note);
        } catch (error) {
            return res.status(500).json(error)
        }
    }

    public async CheckedNotesByUserID(req: Request, res: Response){
        const { userID } = req.params;

        const notes = await CheckedNotes.find({userID: userID});
        return res.status(200).json(notes);
    }
}