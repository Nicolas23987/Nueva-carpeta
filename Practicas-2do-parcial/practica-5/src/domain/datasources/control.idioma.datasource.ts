import { CreateControlIdiomaDto, UpdateControlIdiomaDto } from '../dtos/index'
import { ControlIdiomaEntity } from '../entities/control.idioma'


export abstract class ControlIdiomaDatasource {

    abstract create( createControlIdioma: CreateControlIdiomaDto): Promise<ControlIdiomaEntity>;
    abstract getAll(): Promise<ControlIdiomaEntity[]>;
    abstract getById(id: number): Promise<ControlIdiomaEntity>;
    abstract updateById( updateControlIdioma: UpdateControlIdiomaDto): Promise<ControlIdiomaEntity>
    abstract deleteById(id: number): Promise<ControlIdiomaEntity>;

}
