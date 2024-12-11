import { Request, Response } from 'express';
import { AppDataSource } from '../database/conexion/ormconfig';
import { Paciente } from '../models/Paciente';

export const getAllPacientes = async (req: Request, res: Response) => {
    const pacienteRepository = AppDataSource.getRepository(Paciente);
    const pacientes = await pacienteRepository.find();
    res.json(pacientes);
};

export const getPaciente = async (req: Request, res: Response) => {
    const pacienteRepository = AppDataSource.getRepository(Paciente);
    const paciente = await pacienteRepository.findOneBy({ id: Number(req.params.id) });
    if (paciente) {
        res.json(paciente);
    } else {
        res.status(404).json({ message: 'Paciente no encontrado' });
    }
};

export const createPaciente = async (req: Request, res: Response) => {
    const pacienteRepository = AppDataSource.getRepository(Paciente);
    const newPaciente = pacienteRepository.create(req.body);
    const result = await pacienteRepository.save(newPaciente);
    res.status(201).json(result);
};

export const updatePaciente = async (req: Request, res: Response) => {
    const pacienteRepository = AppDataSource.getRepository(Paciente);
    const paciente = await pacienteRepository.findOneBy({ id: Number(req.params.id) });
    if (paciente) {
        pacienteRepository.merge(paciente, req.body);
        const result = await pacienteRepository.save(paciente);
        res.json(result);
    } else {
        res.status(404).json({ message: 'Paciente no encontrado' });
    }
};

export const deletePaciente = async (req: Request, res: Response) => {
    const pacienteRepository = AppDataSource.getRepository(Paciente);
    const result = await pacienteRepository.delete(req.params.id);
    res.json(result);
};
