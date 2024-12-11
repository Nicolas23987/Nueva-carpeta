import {  CreateInversionRealizadaDto } from "../../dtos";
import { InversionRealizadaEntity } from "../../entities/inversion.realizada";
import { InversionRealizadaRepository } from "../../repositories/inversion.realizada.repository";

export interface CreateInversionRealizadaUseCase {
    execute( dto: CreateInversionRealizadaDto):Promise<InversionRealizadaEntity>
}

export class CreateInversionRealizada implements CreateInversionRealizadaUseCase{
    constructor(
        public readonly repository: InversionRealizadaRepository
    ){}
    execute(dto: CreateInversionRealizadaDto): Promise<InversionRealizadaEntity> {
        return this.repository.create( dto );
    }
}