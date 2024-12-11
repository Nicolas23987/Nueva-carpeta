import { InversionRealizadaEntity } from "../../entities/inversion.realizada";
import { InversionRealizadaRepository } from "../../repositories/inversion.realizada.repository";

export interface DeleteInversionRealizadaUseCase {
    execute( id: string ): Promise<InversionRealizadaEntity>
}

export class DeleteInversionRealizada implements DeleteInversionRealizadaUseCase {
    
    constructor(
        private readonly repository: InversionRealizadaRepository
    ){}


    execute(id: string): Promise<InversionRealizadaEntity> {
        return this.repository.deleteById(id)
    }
}