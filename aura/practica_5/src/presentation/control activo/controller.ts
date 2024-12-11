import { ControlActivoDatasource, CreateControlActivoDto, UpdateControlActivo, UpdateControlActivoDto } from "../../domain";
import { Request, Response } from 'express';

export class ControlActivoController {

    constructor(
        private readonly controlDeActivoRepository: ControlActivoDatasource
    ){}

    public getControlActivo = async (req: Request, res: Response) => {
        const controlesActivo = await this.controlDeActivoRepository.getAll();
        res.json(controlesActivo);
    }

    public getControlActivoById = async (req: Request, res: Response) => {
        const id = +req.params.id;
        try{
            const controlesActivo = await this.controlDeActivoRepository.getById(id);
            res.json(controlesActivo);
        } catch(error) {
            res.status(400).json({ error });
        }
    }

    public createControlActivo = async(req: Request, res: Response) => {
        const [ error, createControlActivoDto ] = CreateControlActivoDto.create(req.body);
        if (error) res.status(400).json({ error });
        const newControlActivo = await this.controlDeActivoRepository.create(createControlActivoDto!);
        res.json(newControlActivo);
    }

    public updateControlActivo = async(req: Request, res: Response) => {
        const id = +req.params.id;
        const [error, updateControlActivoDto] = UpdateControlActivoDto.update({ ...req.body, id });
        if(error) res.status(400).json({ error });

        const updateControlActivo = await this.controlDeActivoRepository.updateById(updateControlActivoDto!);
        res.json(updateControlActivo);
    }

    public deleteControlActivo = async(req: Request, res: Response) => {
        const id = +req.params.id;
        const controlDeActivoDelete = await this.controlDeActivoRepository.deleteById(id);
        res.json(controlDeActivoDelete);
    }

}