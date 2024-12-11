import { SchemaType, Types } from "mongoose";
import { CreateInversionRealizadaDto, InversionRealizadaDatasource, UpdateInversionRealizadaDto } from "../../domain";
import { Request, Response } from 'express';


export class InversionRealizadaController {

    constructor(
        private readonly inversionRepository: InversionRealizadaDatasource
    ) { }

    public getInversionRealizada = async (req: Request, res: Response) => {
        const inversionRealizada = await this.inversionRepository.getAll();
        res.json(inversionRealizada);
    }


    public getInversionRealizadaById = async (req: Request, res: Response) => {
        const id = req.params.id;
        try {
            const inversionRealizada = await this.inversionRepository.findById(id);
            res.json(inversionRealizada);

        } catch (error) {
            res.status(400).json({ error });
        }
    }

    public createInversionRealizada = async (req: Request, res: Response) => {

        const [error, createInversionRealizadaDto] = CreateInversionRealizadaDto.create(req.body)
        if (error) res.status(400).json({ error })
        const newInversionRealizada = await this.inversionRepository.create(createInversionRealizadaDto!)
        res.json(newInversionRealizada);
    }

    public updateInversionRealizada = async (req: Request, res: Response) => {
        const id = req.params.id;
        const [error, updateInversionRealizadaDto] = UpdateInversionRealizadaDto.update({ ...req.body, id })
        if (error) res.status(400).json({ error })

        const updateInversionRealizada = await this.inversionRepository.updateById(updateInversionRealizadaDto!);
        res.json(updateInversionRealizada)
    }

    public deleteInversionRealizada = async (req: Request, res: Response) => {
        const id = req.params.id;

        const inversionRealizadaDelete = await this.inversionRepository.deleteById(id);
        res.json(inversionRealizadaDelete)
    }

}