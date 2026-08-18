import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import { NextFunction, Response } from 'express';
import { extendedRequest } from '../types/extended-request';

dotenv.config()

export const createJWT = (id: number) => {
    return jwt.sign({ id }, process.env.JWT_SECRET as string)
}

export const verifyJWT = async (req: extendedRequest, res: Response, next: NextFunction) => {

    const authHeader = req.headers['authorization']

    if (!authHeader) {
        res.status(401).json({error: 'Acesso Negado'})
        return
    }

    const token = authHeader.split(' ')[1]

    jwt.verify(token, process.env.JWT_SECRET as string,
         (err, decoded: any) => {
            if(err) {
                res.status(500).json({ error: 'Acesso Negado'})
                return
            }

            req.userId = decoded.id
            next()
         })
}