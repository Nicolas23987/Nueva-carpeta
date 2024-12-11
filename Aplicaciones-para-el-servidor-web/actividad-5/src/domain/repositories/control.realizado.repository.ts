import { CreateControlRealizadoDto, UpdateControlRealizadoDto } from '../dtos/index'
import { ControlRealizadoEntity } from '../entities/control.realizado'


export abstract class  ControlRealizadoRepository {

    abstract create( createControlRealizado: CreateControlRealizadoDto): Promise<ControlRealizadoEntity>;
    abstract getAll(): Promise<ControlRealizadoEntity[]>;
    abstract findById(id: number): Promise<ControlRealizadoEntity>;
    abstract updateById( updateControlRealizado: UpdateControlRealizadoDto): Promise<ControlRealizadoEntity>
    abstract deleteById(id: number): Promise<ControlRealizadoEntity>;

}
