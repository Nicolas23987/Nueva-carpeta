import {  UpdateControlRealizadoDto } from "../../dtos";
import { ControlRealizadoEntity } from "../../entities/control.realizado";
import { ControlRealizadoRepository } from "../../repositories/control.realizado.repository";



export interface UpdateControlRealizadoUseCase {
    execute( dto: UpdateControlRealizadoDto):Promise<ControlRealizadoEntity>
}


export class UpdateControlRealizado implements UpdateControlRealizadoUseCase{
    constructor(
        public readonly repository: ControlRealizadoRepository
    ){}

    execute(dto: UpdateControlRealizadoDto): Promise<ControlRealizadoEntity> {
        return this.repository.updateById( dto );
    }
}