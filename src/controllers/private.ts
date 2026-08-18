import { RequestHandler, Response } from "express";
import { extendedRequest } from "../types/extended-request";
import { getUserById } from "../services/user";

export const test = async (req: extendedRequest, res: Response) => {
    if(!req.userId) {
        res.status(401).json({ error: 'Acesso Negado'})
        return
    }

    const user = await getUserById(req.userId)
    
    if(!user) {
        res.status(401).json({ error: 'Acesso Negado' })
        return
    }

    res.json({ user })
}