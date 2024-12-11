import {  CreateControlRealizadoDto } from "../../dtos";
import { ControlRealizadoEntity } from "../../entities/control.realizado";
import { ControlRealizadoRepository } from "../../repositories/control.realizado.repository";

export interface CreateControlRealizadoUseCase {
    execute( dto: CreateControlRealizadoDto):Promise<ControlRealizadoEntity>
}

export class CreateControlRealizado implements CreateControlRealizadoUseCase{
    constructor(
        public readonly repository: ControlRealizadoRepository
    ){}
    execute(dto: CreateControlRealizadoDto): Promise<ControlRealizadoEntity> {
        return this.repository.create( dto );
    }
}