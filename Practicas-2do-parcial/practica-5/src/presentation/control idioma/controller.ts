import { ControlIdiomaDatasource, CreateControlIdiomaDto, UpdateControlIdioma, UpdateControlIdiomaDto } from "../../domain";
import { Request, Response } from 'express';

export class ControlIdiomaController {

    constructor(
        private readonly controlDeIdiomaRepository: ControlIdiomaDatasource
    ){}

    public getControlIdioma = async (req: Request, res: Response) => {
        const controlesIdioma = await this.controlDeIdiomaRepository.getAll();
        res.json( controlesIdioma );
    }


    public getControlIdiomaById = async (req: Request, res: Response) => {
        const id = +req.params.id
        try{
            const controlesIdioma = await this.controlDeIdiomaRepository.getById(id);
            res.json( controlesIdioma );

        }catch(error){
          res.status( 400 ).json({ error });
        }
    }

    public createControlIdioma = async(req: Request, res: Response) => {
        
        const [ error, createControlIdiomaDto ] = CreateControlIdiomaDto.create( req.body )
        if (error) res.status( 400 ).json( { error } )
        const newControlIdioma = await this.controlDeIdiomaRepository.create( createControlIdiomaDto! )
        res.json( newControlIdioma );
    }

    public updateControlIdioma = async(req: Request, res: Response) =>{
        const id = +req.params.id;
        const [error, updateControlIdiomaDto] = UpdateControlIdiomaDto.update( {...req.body, id} )
        if(error) res.status(400).json({error})
        
        const updateControlIdioma = await this.controlDeIdiomaRepository.updateById( updateControlIdiomaDto! );
        res.json( updateControlIdioma )
    }

    public deleteControlIdioma = async(req: Request, res: Response) => {
        const id = +req.params.id;
        const controlDeIdiomaDelete = await this.controlDeIdiomaRepository.deleteById( id );
        res.json( controlDeIdiomaDelete )
    }

}