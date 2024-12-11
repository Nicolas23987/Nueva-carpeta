// SignoVitalController.ts
import { Request, Response } from 'express';
import { AppDataSource } from '../database/ormconfig';
import { SignoVital } from '../models/SignoVital';

export class SignoVitalController {
    static async getAll(req: Request, res: Response) {
        const signoRepository = AppDataSource.getRepository(SignoVital);
        const signos = await signoRepository.find();
        res.json(signos);
    }

    static async getOne(req: Request, res: Response) {
        const signoRepository = AppDataSource.getRepository(SignoVital);
        const signo = await signoRepository.findOneBy({ id: Number(req.params.id) });
        if (signo) {
            res.json(signo);
        } else {
            res.status(404).json({ message: 'Signo vital no encontrado' });
        }
    }

    static async create(req: Request, res: Response) {
        const signoRepository = AppDataSource.getRepository(SignoVital);
        const newSigno = signoRepository.create(req.body);
        const result = await signoRepository.save(newSigno);
        res.status(201).json(result);
    }

    static async update(req: Request, res: Response) {
        const signoRepository = AppDataSource.getRepository(SignoVital);
        const signo = await signoRepository.findOneBy({ id: Number(req.params.id) });
        if (signo) {
            signoRepository.merge(signo, req.body);
            const result = await signoRepository.save(signo);
            res.json(result);
        } else {
            res.status(404).json({ message: 'Signo vital no encontrado' });
        }
    }

    static async delete(req: Request, res: Response) {
        const signoRepository = AppDataSource.getRepository(SignoVital);
        const result = await signoRepository.delete(req.params.id);
        res.json(result);
    }
}
