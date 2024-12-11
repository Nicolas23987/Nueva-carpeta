import { Request, Response } from 'express';
import { AppDataSource } from '../database/conexion/ormconfig';
import { SignoVital } from '../models/SignoVital';

export const getAllSignosVitales = async (req: Request, res: Response) => {
    const signoRepository = AppDataSource.getRepository(SignoVital);
    const signos = await signoRepository.find();
    res.json(signos);
};

export const getSignoVital = async (req: Request, res: Response) => {
    const signoRepository = AppDataSource.getRepository(SignoVital);
    const signo = await signoRepository.findOneBy({
        id: Number(req.params.id) 
    });
    if (signo) {
        res.json(signo);
    } else {
        res.status(404).json({ 
            message: 'Signo vital no encontrado' 
        });
    }
};

export const createSignoVital = async (req: Request, res: Response) => {
    const signoRepository = AppDataSource.getRepository(SignoVital);
    const newSigno = signoRepository.create(req.body);
    const result = await signoRepository.save(newSigno);
    res.status(201).json(result);
};

export const updateSignoVital = async (req: Request, res: Response) => {
    const signoRepository = AppDataSource.getRepository(SignoVital);
    const signo = await signoRepository.findOneBy({ id: Number(req.params.id) });
    if (signo) {
        signoRepository.merge(signo, req.body);
        const result = await signoRepository.save(signo);
        res.json(result);
    } else {
        res.status(404).json({ 
            message: 'Signo vital no encontrado' 
        });
    }
};

export const deleteSignoVital = async (req: Request, res: Response) => {
    const signoRepository = AppDataSource.getRepository(SignoVital);
    const result = await signoRepository.delete(req.params.id);
    res.json(result);
};
