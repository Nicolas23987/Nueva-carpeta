import { Request, Response } from 'express';
import { AppDataSource } from '../database/conexion/ormconfig';
import { ControlRealizado } from '../models/ControlRealizado';

export const getAllControles = async (req: Request, res: Response) => {
    const controlRepository = AppDataSource.getRepository(ControlRealizado);
    const controles = await controlRepository.find({ relations: ['paciente', 'signoVital'] });
    res.json(controles);
};

export const getControlRealizado = async (req: Request, res: Response) => {
    const controlRepository = AppDataSource.getRepository(ControlRealizado);
    const control = await controlRepository.findOne({ where: { id: Number(req.params.id) }, relations: ['paciente', 'signoVital'] });
    if (control) {
        res.json(control);
    } else {
        res.status(404).json({ message: 'Control realizado no encontrado' });
    }
};

export const createControlRealizado = async (req: Request, res: Response) => {
    const controlRepository = AppDataSource.getRepository(ControlRealizado);
    const newControl = controlRepository.create(req.body);
    const result = await controlRepository.save(newControl);
    res.status(201).json(result);
};

export const updateControlRealizado = async (req: Request, res: Response) => {
    const controlRepository = AppDataSource.getRepository(ControlRealizado);
    const control = await controlRepository.findOneBy({ id: Number(req.params.id) });
    if (control) {
        controlRepository.merge(control, req.body);
        const result = await controlRepository.save(control);
        res.json(result);
    } else {
        res.status(404).json({ message: 'Control realizado no encontrado' });
    }
};

export const deleteControlRealizado = async (req: Request, res: Response) => {
    const controlRepository = AppDataSource.getRepository(ControlRealizado);
    const result = await controlRepository.delete(req.params.id);
    res.json(result);
};
