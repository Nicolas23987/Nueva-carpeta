import { InversionRealizadaEntity } from "../../entities/inversion.realizada";
import { InversionRealizadaRepository } from "../../repositories/inversion.realizada.repository";

export interface GetAllContolRealizadoUseCase{
    execute():Promise<InversionRealizadaEntity[]>
}

export class GetAllInversionRealizadaEntity implements GetAllContolRealizadoUseCase{
    constructor(
        public readonly repository: InversionRealizadaRepository
    ){}

    execute(): Promise<InversionRealizadaEntity[]> {
        return this.repository.getAll();

    }

}