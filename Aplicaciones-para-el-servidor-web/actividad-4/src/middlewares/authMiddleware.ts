import { Request, Response, NextFunction } from 'express';
import jwt, { JwtPayload } from 'jsonwebtoken';
import { AppDataSource } from '../database/conexion/ormconfig'; 
import { Usuario } from '../models/Usuario';

const JWT_SECRET = process.env.JWT_SECRET || 'nicolasKey';

export const verificarToken = (req: Request, res: Response, next: NextFunction): void => {
    const authHeader = req.headers['authorization'];

    if (!authHeader) {
        res.status(403).json({
            status: false,
            mensaje: 'Token no proporcionado'
        });
        return; 
    }

    const token = authHeader.split(' ')[1];

    jwt.verify(token, JWT_SECRET, (err: any, decoded: any) => {
        if (err) {
            res.status(401).json({
                status: false,
                mensaje: 'Token Rechazado'
            });
            return;
        }

        req.body.usuarioId = decoded.id;
        next();
    });
};