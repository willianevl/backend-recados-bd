import { Request, Response } from "express";
import { User } from "../../../core/data/database/entities/User";


export default class UserController {
    public async store(req: Request, res: Response){
        const { username, password, confirmPassword } = req.body;

        try {
            const user = await new User(username, password, confirmPassword).save();

            return res.status(201).json(user);
        } catch (error) {
            return res.status(500).json(error)
        }
    }

    public async update(req: Request, res: Response){
        const { username, password, confirmPassword } = req.body;
        const { id } = req.params;

        const user = await User.update(id, {
            username,
            password
        });

        return res.status(200).json((user.affected as number > 0) ? "Usuario alterado": "Falha na requisição")
    }

    public async delete(req: Request, res: Response){
        const { id } = req.params;

        const user = await User.delete(id);

        return res.status(200).json((user.affected as number > 0)? "Usuário excluído": "Falha na exclusão");
    }

    public async show(req: Request, res: Response){
        const users = await User.find();

        return res.status(200).json(users)
    }
}