import {  UpdateInversionRealizadaDto } from "../../dtos";
import { InversionRealizadaEntity } from "../../entities/inversion.realizada";
import { InversionRealizadaRepository } from "../../repositories/inversion.realizada.repository";

export interface UpdateInversionRealizadaUseCase {
    execute( dto: UpdateInversionRealizadaDto):Promise<InversionRealizadaEntity>
}

export class UpdateInversionRealizada implements UpdateInversionRealizadaUseCase{
    constructor(
        public readonly repository: InversionRealizadaRepository
    ){}

    execute(dto: UpdateInversionRealizadaDto): Promise<InversionRealizadaEntity> {
        return this.repository.updateById( dto );
    }
}