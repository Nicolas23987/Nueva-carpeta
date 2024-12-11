import { InversionRealizadaEntity } from "../../entities/inversion.realizada"
import { InversionRealizadaRepository } from "../../repositories/inversion.realizada.repository"

export interface GetInversionRealizadaUseCase {
    execute ( id: string): Promise<InversionRealizadaEntity>
}

export class GetInversionRealizada implements GetInversionRealizadaUseCase{
    constructor(
        private readonly repository: InversionRealizadaRepository
    ){}

    execute(id: string): Promise<InversionRealizadaEntity> {
        return this.repository.findById( id )
    }
}