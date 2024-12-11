import { Request, Response } from 'express';
import { AppDataSource } from '../database/ormconfig';
import { Paciente } from '../models/Paciente';

export class PacienteController {
    static async getAll(req: Request, res: Response) {
        const pacienteRepository = AppDataSource.getRepository(Paciente);
        const pacientes = await pacienteRepository.find();
        res.json(pacientes);
    }

    static async getOne(req: Request, res: Response) {
        const pacienteRepository = AppDataSource.getRepository(Paciente);
        const paciente = await pacienteRepository.findOneBy({ id: Number(req.params.id) }); 
        if (paciente) {
            res.json(paciente);
        } else {
            res.status(404).json({ message: 'Paciente no encontrado' });
        }
    }

    static async create(req: Request, res: Response) {
        const pacienteRepository = AppDataSource.getRepository(Paciente);
        const newPaciente = pacienteRepository.create(req.body);
        const result = await pacienteRepository.save(newPaciente);
        res.status(201).json(result);
    }

    static async update(req: Request, res: Response) {
        const pacienteRepository = AppDataSource.getRepository(Paciente);
        const paciente = await pacienteRepository.findOneBy({ id: Number(req.params.id) });
        if (paciente) {
            pacienteRepository.merge(paciente, req.body);
            const result = await pacienteRepository.save(paciente);
            res.json(result);
        } else {
            res.status(404).json({ message: 'Paciente no encontrado' });
        }
    }

    static async delete(req: Request, res: Response) {
        const pacienteRepository = AppDataSource.getRepository(Paciente);
        const result = await pacienteRepository.delete(req.params.id);
        res.json(result);
    }
}
