import { Request, Response } from 'express';
import { SignoVitalDatasource, CreateSignoVitalDto, UpdateSignoVitalDto } from "../../domain";

export class SignoVitalController {

    constructor(
        private readonly signoVitalRepository: SignoVitalDatasource
    ){}

    public getSignosVitales = async (req: Request, res: Response) => {
        const signosVitales = await this.signoVitalRepository.getAll();
        res.json(signosVitales);
    }

    public getSignoVitalById = async (req: Request, res: Response) => {
        const id = +req.params.id;
        try {
            const signoVital = await this.signoVitalRepository.findById(id);
            res.json(signoVital);
        } catch (error) {
            res.status(400).json({ error });
        }
    }

    public createSignoVital = async (req: Request, res: Response) => {
        const [error, createSignoVitalDto] = CreateSignoVitalDto.create(req.body);
        if (error) res.status(400).json({ error });
        const newSignoVital = await this.signoVitalRepository.create(createSignoVitalDto!);
        console.log(newSignoVital)
        res.json(newSignoVital);
    }

    public updateSignoVital = async (req: Request, res: Response) => {
        const id = +req.params.id;
        const [error, updateSignoVitalDto] = UpdateSignoVitalDto.update({ ...req.body, id });
        if (error) res.status(400).json({ error });
        
        const updatedSignoVital = await this.signoVitalRepository.updateById(updateSignoVitalDto!);
        res.json(updatedSignoVital);
    }

    public deleteSignoVital = async (req: Request, res: Response) => {
        const id = +req.params.id;
        const deletedSignoVital = await this.signoVitalRepository.deleteById(id);
        res.json(deletedSignoVital);
    }
}
