import { Request, Response } from 'express';
import { PacienteDatasource, CreatePacienteDto, UpdatePacienteDto } from "../../domain";

export class PacienteController {

    constructor(
        private readonly pacienteRepository: PacienteDatasource
    ){}

    public getPacientes = async (req: Request, res: Response) => {
        const pacientes = await this.pacienteRepository.getAll();
        res.json(pacientes);
    }

    public getPacienteById = async (req: Request, res: Response) => {
        const id = +req.params.id;
        try {
            const paciente = await this.pacienteRepository.findById(id);
            res.json(paciente);
        } catch (error) {
            res.status(400).json({ error });
        }
    }

    public createPaciente = async (req: Request, res: Response) => {
        const [error, createPacienteDto] = CreatePacienteDto.create(req.body);
        if (error) res.status(400).json({ error });
        
        const newPaciente = await this.pacienteRepository.create(createPacienteDto!);
        res.json(newPaciente);
    }

    public updatePaciente = async (req: Request, res: Response) => {
        const id = +req.params.id;
        const [error, updatePacienteDto] = UpdatePacienteDto.update({ ...req.body, id });
        if (error) res.status(400).json({ error });
        
        const updatedPaciente = await this.pacienteRepository.updateById(updatePacienteDto!);
        res.json(updatedPaciente);
    }

    public deletePaciente = async (req: Request, res: Response) => {
        const id = +req.params.id;
        const deletedPaciente = await this.pacienteRepository.deleteById(id);
        res.json(deletedPaciente);
    }
}
