import { ControlRealizadoDatasource, CreateControlRealizadoDto, UpdateControlRealizado, UpdateControlRealizadoDto } from "../../domain";
import { Request, Response } from 'express';

export class ControlRealizadoController {

    constructor(
        private readonly controlRealizadoRepository: ControlRealizadoDatasource
    ){}

    public getControlRealizado = async (req: Request, res: Response) => {
        const controlesRealizado = await this.controlRealizadoRepository.getAll();
        res.json( controlesRealizado );
    }


    public getControlRealizadoById = async (req: Request, res: Response) => {
        const id = +req.params.id
        try{
            const controlesRealizado = await this.controlRealizadoRepository.findById(id);
            res.json( controlesRealizado );

        }catch(error){
          res.status( 400 ).json({ error });
        }
    }

    public createControlRealizado = async(req: Request, res: Response) => {
        
        const [ error, createControlRealizadoDto ] = CreateControlRealizadoDto.create( req.body )
        if (error) res.status( 400 ).json( { error } )
        const newControlRealizado = await this.controlRealizadoRepository.create( createControlRealizadoDto! )
        res.json( newControlRealizado );
    }

    public updateControlRealizado = async(req: Request, res: Response) =>{
        const id = +req.params.id;
        const [error, updateControlRealizadoDto] = UpdateControlRealizadoDto.update( {...req.body, id} )
        if(error) res.status(400).json({error})
        
        const updateControlRealizado = await this.controlRealizadoRepository.updateById( updateControlRealizadoDto! );
        res.json( updateControlRealizado )
    }

    public deleteControlRealizado = async(req: Request, res: Response) => {
        const id = +req.params.id;
        const controlRealizadoDelete = await this.controlRealizadoRepository.deleteById( id );
        res.json( controlRealizadoDelete )
    }

}