import { Request, Response } from 'express';
import { AppDataSource } from '../database/ormconfig';
import { ControlRealizado } from '../models/ControlRealizado';

export class ControlRealizadoController {
    static async getAll(req: Request, res: Response) {
        const controlRepository = AppDataSource.getRepository(ControlRealizado);
        const controles = await controlRepository.find({ relations: ['paciente', 'signoVital'] });
        res.json(controles);
    };

    static async getOne(req: Request, res: Response) {
        const controlRepository = AppDataSource.getRepository(ControlRealizado);
        const control = await controlRepository.findOne({ where: { id: Number(req.params.id) }, relations: ['paciente', 'signoVital'] });
        if (control) {
            res.json(control);
        } else {
            res.status(404).json({ message: 'Control realizado no encontrado' });
        }
    }

    static async create(req: Request, res: Response) {
        const controlRepository = AppDataSource.getRepository(ControlRealizado);
        const newControl = controlRepository.create(req.body);
        const result = await controlRepository.save(newControl);
        res.status(201).json(result);
    }

    static async update(req: Request, res: Response) {
        const controlRepository = AppDataSource.getRepository(ControlRealizado);
        const control = await controlRepository.findOneBy({ id: Number(req.params.id) });
        if (control) {
            controlRepository.merge(control, req.body);
            const result = await controlRepository.save(control);
            res.json(result);
        } else {
            res.status(404).json({ message: 'Control realizado no encontrado' });
        }
    }

    static async delete(req: Request, res: Response) {
        const controlRepository = AppDataSource.getRepository(ControlRealizado);
        const result = await controlRepository.delete(req.params.id);
        res.json(result);
    }
}
